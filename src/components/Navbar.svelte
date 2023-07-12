<script>
	import NavLink from "~/components/NavLink.svelte";
	import {invalidateAll} from "$app/navigation";

	let links = [
		{
			name: 'Home',
			href: '/',
			icon: 'home',
			auth: false,
		},
		{
			name: 'Saved',
			href: '/me/saved',
			icon: 'bookmark',
			auth: true,
		},
		{
			name: 'Profile',
			href: '/me',
			icon: 'user',
			auth: true,
		}
	]

	export let data;
</script>

<div class="col-span-2 p-4">
    <div class="flex flex-col justify-center items-center rounded-md bg-gray-900 sticky top-4">
        <a href="/"
           class="py-4 rounded-full w-full text-center text-4xl bg-gray-900 transition hover:text-gray-300">twibber</a>
        <hr class="w-full border-gray-800">
        <div class="flex flex-col gap-2 p-2 w-full">
            {#each links as link}
                {#if !link.auth}
                    <NavLink href={link.href} icon={link.icon}>{link.name}</NavLink>
                {:else if data.session}
                    <NavLink href={link.href} icon={link.icon}>{link.name}</NavLink>
                {/if}
            {/each}
        </div>
        <hr class="w-full border-gray-800">
        <div class="flex flex-col gap-2 p-2 w-full">
            <a
                    href={data.session ? '/logout' : '/login'}
                    class="p-2 bg-blue-600 rounded hover:bg-opacity-75 text-lg text-center transition"
                    on:click={() => {
						invalidateAll();
                    }}
            >
                {data.session ? 'Logout' : 'Login'}
            </a>
        </div>
    </div>
</div>