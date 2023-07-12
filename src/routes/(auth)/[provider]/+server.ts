import {googleAuth} from '$lib/server/lucia';
import {error} from '@sveltejs/kit';
import {dev} from '$app/environment';

import type {RequestHandler} from './$types';

const possibleProviders = ['google'];

export const GET: RequestHandler = async ({cookies, params}) => {
	const {provider} = params;

	if (!possibleProviders.includes(provider)) {
		throw error(400, 'Invalid provider');
	}

	const getURL = async (provider: string) => {
		switch (provider) {
			case 'google':
				return await googleAuth.getAuthorizationUrl();
			default:
				throw error(400, 'Invalid provider');
		}
	}

	const [url, state] = await getURL(provider)

	cookies.set(provider + '_oauth_state', state, {
		httpOnly: true,
		secure: !dev,
		path: '/',
		maxAge: 60 * 60
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString()
		}
	});
};
