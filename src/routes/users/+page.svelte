<script>
	import Box from "~/components/Box.svelte";

	export let data;
</script>

<Box title="Users">
    {#each data.users as user}
        <div class="flex flex-col w-full bg-gray-950 rounded">
            <div class="flex flex-row items-center justify-between w-full p-4">
                <div class="flex flex-row items-center">
                    <img src={user.image} alt={user.name} class="w-12 h-12 rounded">
                    <div class="flex flex-col ml-4">
                        <div class="text-base font-medium text-white">
                            {user.name}
                        </div>
                        <div class="text-sm font-semibold text-gray-400">
                            @{user.username}
                        </div>
                    </div>
                </div>
                <button class={`px-4 py-2 rounded hover:bg-opacity-75 text-sm text-center transition ${user.followers.includes(data.user.id) ? "bg-gray-500":"bg-blue-600"}`}>
                    {#if user.followers.includes(data.user.id)}
                        Unfollow
                    {:else}
                        Follow
                    {/if}
                </button>
            </div>
        </div>
    {/each}
</Box>