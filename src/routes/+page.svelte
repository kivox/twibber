<script>
    import Box from "~/components/Box.svelte";
</script>

<Box
    title="Home"
    buttons={[
        {
            label: "For you",
            href: "/"
        },
        {
            label: "Following",
            href: "/following"
        }
    ]}
>
    <div class="flex flex-col w-full bg-gray-950 rounded">
        <div class="flex flex-row items-center gap-4 h-18 p-4">
            <img class="w-12 h-12 rounded-full" src="https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.2560.jpg" alt="Twibber Logo">
            <div class="flex flex-col">
                <div class="text-white">Twibber</div>
                <div class="text-gray-400 text-xs">@twibber</div>
            </div>
            <div class="flex-grow"></div>
            <div class="text-gray-400 text-xs h-full">1h</div>
        </div>
        <hr class="border-gray-800">
        <div class="p-4">
            Good Evening!
        </div>
        <hr class="border-gray-800">
        <div class="w-full flex flex-row p-4">
            <div class="w-full">Comment</div>
            <div class="w-full">Retweeb</div>
            <div class="w-full">Like</div>
            <div class="w-full">Analytics</div>
            <div class="w-full">Download</div>
        </div>
    </div>
</Box>