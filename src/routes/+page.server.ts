import {z} from "zod";
import type {Actions} from './$types';
import {setError, superValidate} from "sveltekit-superforms/server";
import {auth} from "$lib/server/lucia";
import prisma from "$lib/server/prisma";
import {PostType} from "@prisma/client";
import {fail} from "@sveltejs/kit";

const tweebForm = z.object({
	content: z.string().min(1).max(240),
});

export const load = async () => {
	return {
		posts: await prisma.post.findMany({
			orderBy: {
				created_at: 'desc',
			},
			take: 50,
			include: {
				user: {
					select: {
						id: true,
						image: true,
						name: true,
						username: true,
						email: true,
						admin: true,
					}
				}
			}
		}),
		form: await superValidate(tweebForm)
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event.request, tweebForm);

		const authHandler = auth.handleRequest(event);
		const authUser = await authHandler.validate();

		const user = await prisma.user.findUnique({
			where: {
				id: authUser?.user.userId,
			}
		});

		if (!user) {
			setError(form, "You must be logged in to post.");
		}

		if (form.valid) {
			await prisma.post.create({
				data: {
					type: PostType.TWEEB,
					content: form.data.content,
					user: {
						connect: {
							id: user?.id,
						}
					},
				}
			});
		} else {
			return fail(400, {form});
		}

		return {
			form,
		}
	}
} satisfies Actions;