import {auth} from "$lib/server/lucia";
import type {Handle, HandleServerError} from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
	event.locals.auth = auth.handleRequest(event);
	return resolve(event);
};

export const handleError: HandleServerError = (({error}) => {
	console.dir(error, {depth: 0});
})