// lucia.ts
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { discord, google } from "@lucia-auth/oauth/providers";

import { prisma } from "@lucia-auth/adapter-prisma";
import prismaClient from "./prisma";

import { dev } from "$app/environment";
import {env as pubEnv} from "$env/dynamic/public";
import {env as privEnv} from "$env/dynamic/private";

export const auth = lucia({
    adapter: prisma(prismaClient, {
        modelNames: {
            user: "user",
            key: "key",
            session: "session"
        },
        userRelationKey: "user"
    }),
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
});

export type Auth = typeof auth

export const googleAuth = google(auth, {
    clientId: privEnv.GOOGLE_CLIENT_ID,
    clientSecret: privEnv.GOOGLE_CLIENT_SECRET,
    redirectUri: `${pubEnv.PUBLIC_APP_URL}/login/google/callback`,
    scope: ["openid", "email", "profile"]
});


export const discordAuth = discord(auth, {
    clientId: privEnv.DISCORD_CLIENT_ID,
    clientSecret: privEnv.DISCORD_CLIENT_SECRET,
    redirectUri: `${pubEnv.PUBLIC_APP_URL}/login/discord/callback`,
    scope: ["email", "guilds"]
});