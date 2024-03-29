import prisma from "$lib/server/prisma";
import type {LayoutServerLoad} from "./$types";

export const load: LayoutServerLoad = async ({locals}) => {
	const session = await locals.auth.validate();

	const user = session ? await prisma.user.findUnique({
		where: {
			id: session.user.userId,
		},
		select: {
			id: true,
			image: true,
			name: true,
			username: true,
			email: true,
			admin: true,
			created_at: true,
			followers: true,
			following: true,
		},
	}) : undefined;

	return {
		session: session,
		user: user,
	};
};