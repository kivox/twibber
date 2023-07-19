import {redirect} from "@sveltejs/kit";
import type {PageServerLoad} from "./$types";
import prisma from "$lib/server/prisma";

export const load: PageServerLoad = async ({locals}) => {
	const session = await locals.auth.validate();

	if (!session) {
		throw redirect(302, "/")
	}

	return {
		session: session,
		users: await prisma.user.findMany({
			select: {
				id: true,
				name: true,
				image: true,
				admin: true,
				username: true,
				followers: {
					select: {
						id: true,
					}
				}
			},
		}),
	};
};