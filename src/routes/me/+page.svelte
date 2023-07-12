<script>
	import Box from "~/components/Box.svelte";

	export let data;
</script>

<Box
        title={data.user.name}
        buttons={[
        {
            label: "Edit",
            href: "/user/edit"
        },
        {
            label: "Delete",
            href: "/user/delete",
        }
    ]}
>
    <div class="bg-blue-500 h-48 w-full"></div>

    <div class="relative flex flex-col items-center p-4">
        <img class="h-32 w-32 rounded-full border-4 border-white -mt-20 object-cover" src={data.user.image} alt={data.user.name} />

        <h2 class="text-2xl font-bold mt-2">{data.user.name}</h2>
        <p class="text-gray-500">@{data.user.username}</p>

        <div class="mt-3 flex space-x-5 text-gray-500">
            <p><span class="font-bold">0</span> Following</p>
            <p><span class="font-bold">0</span> Followers</p>
        </div>

        <div class="mt-3 text-gray-500">
            <div>Joined {new Date(data.user.created_at).toLocaleDateString()}</div>
        </div>
    </div>
</Box>