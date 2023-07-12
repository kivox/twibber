<script>
	import NavLink from "~/components/NavLink.svelte";

	let links = [
		{
			name: 'Home',
			url: '/',
            icon: 'home',
            auth: false,
		},
		{
			name: 'Trending',
			url: '/trending',
            icon: 'trending-up',
            auth: false,
		},
		{
			name: 'Notifications',
			url: '/notification',
            icon: 'bell',
            auth: true,
		},
		{
			name: 'Messages',
			url: '/messages',
            icon: 'mail',
            auth: true,
		},
		{
			name: 'Saved',
			url: '/me/saved',
            icon: 'bookmark',
            auth: true,
		},
		{
			name: 'Profile',
			url: '/me',
            icon: 'user',
            auth: true,
		}
	]
</script>

<div class="col-span-2 p-4 ">
    <div class="flex flex-col justify-center items-center rounded-md bg-gray-900 sticky top-4">
        <a href="/"
           class="py-4 rounded-full w-full text-center text-4xl bg-gray-900 transition hover:text-gray-300">twibber</a>
        <hr class="w-full border-gray-800">
        <div class="flex flex-col gap-2 p-2 w-full">
            {#each links as link}
                <NavLink href={link.url} icon={link.icon}>{link.name}</NavLink>
            {/each}
        </div>
        <hr class="w-full border-gray-800">
        <div class="p-2 w-full">
            <button class="w-full p-2 bg-blue-600 hover:bg-opacity-75 rounded text-xl">Tweeb</button>
        </div>
    </div>
</div>