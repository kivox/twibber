<script>
	import Box from "~/components/Box.svelte";

	export let data;
</script>

<Box
        title={data.user.name}
        buttons={[
        {
            label: "Edit",
            href: "#"
        },
        {
            label: "Delete",
            href: "#",
        }
    ]}
>
    <div class="relative flex flex-col items-start p-4 bg-gray-950 rounded-md">
        <img class="h-32 w-32 rounded-md object-cover" src={data.user.image} alt={data.user.name}/>

        <h2 class="text-2xl font-bold mt-2">{data.user.name}</h2>
        <p class="text-gray-400">@{data.user.username}</p>

        <div class="mt-3 flex space-x-5 text-gray-400">
            <p><span class="font-bold text-gray-200">0</span> Following</p>
            <p><span class="font-bold text-gray-200">0</span> Followers</p>
        </div>

        <div class="mt-3 text-gray-500">
            <div>Joined <span
                    class="font-bold text-gray-300">{new Date(data.user.created_at).toLocaleDateString()}</span></div>
        </div>
    </div>
</Box>