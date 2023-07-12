import {auth, googleAuth} from '$lib/server/lucia';

import {error, redirect} from "@sveltejs/kit";
import prisma from "$lib/server/prisma";

import type {RequestHandler} from './$types';

export const GET: RequestHandler = async ({url, cookies, locals, params}) => {
	const {provider} = params;
	const storedState = cookies.get(provider + '_oauth_state');

	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	// validate state
	if (!storedState || !state || storedState !== state || !code) {
		throw redirect(307, '/login');
	}

	let newUser = false;
	const getUser = async () => {
		switch (provider) {
			case 'google': {
				const {existingUser, googleUser} = await googleAuth.validateCallback(code);
				if (existingUser) return existingUser;

				const prismaUser = await prisma.user.findUnique({
					where: {
						email: googleUser.email,
					}
				})

				if (prismaUser) {
					await auth.createKey({
						userId: prismaUser.id,
						providerId: "google",
						providerUserId: googleUser.sub,
						password: null,
					})

					return await auth.getUser(prismaUser.id)
				} else {
					newUser = true;

					if (!googleUser.email) {
						throw error(400, "Google email is required")
					}

					let username = googleUser.name.toLowerCase().replace(" ", "_")

					let tries = 0
					while (tries > 0) {
						if (await prisma.user.count({
							where: {
								username: username,
							}
						}) > 0) {
							username = googleUser.name + tries
						} else {
							break
						}
						tries++
					}

					return await auth.createUser({
						attributes: {
							name: googleUser.name,
							username: username,
							image: googleUser.picture,
							email: googleUser.email,
						},
						key: {
							providerId: "google",
							providerUserId: googleUser.sub,
							password: null,
						}
					})
				}
			}
			default: {
				throw error(400, "Invalid provider")
			}
		}
	};

	const user = await getUser();

	const prismaUser = await prisma.user.findUnique({
		where: {
			id: user.userId,
		},
	})

	if (!prismaUser) {
		throw error(400, "User not found")
	}

	if (newUser) {
		// do smth on new user
	}

	const session = await auth.createSession({
		userId: user.userId,
		attributes: {}
	});

	locals.auth.setSession(session);

	return new Response(null, {
		status: 302,
		headers: {
			Location: "/"
		}
	});
};
