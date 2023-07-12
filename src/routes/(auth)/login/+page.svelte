<script>
	import Box from "~/components/Box.svelte";

	let providers = [
		{
			name: "Google",
			icon: "google",
			href: "/google"
		},
	]
</script>

<Box title="Login">
    <div class="flex flex-col w-full bg-gray-900 rounded p-4 gap-2">
        <div class="flex flex-col gap-1">
            <div class="text-2xl">
                Login to your account
            </div>
            <div class="text-sm text-gray-400">
                Choose a provider to login with
            </div>
        </div>

        <div class="flex flex-col gap-2 py-2">
            {#each providers as provider}
                <a href={provider.href}
                   class="w-full text-center gap-2 p-2 bg-gray-950 rounded hover:bg-opacity-75 text-lg">
                    Sign in with {provider.name}
                </a>
            {/each}
        </div>

        <div class="flex flex-col gap-2 text-xs text-gray-400 font-medium">
            <p>
                If you want to login using multiple oAuth providers to reach your account make sure their email matches
                on all of them, else use the same oAuth provider for each login.
            </p>
            <p>
                If you don't have an existing account one will be created for you the first time you login.
            </p>
        </div>
    </div>
</Box>