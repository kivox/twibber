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
        <div class="w-full grid grid-cols-5 h-16">
            <div class="item">Comment</div>
            <div class="item">Retweeb</div>
            <div class="item">Like</div>
            <div class="item">Analytics</div>
            <div class="item">Download</div>
        </div>
    </div>
</Box>

<style>
    .item {
        @apply w-full text-center h-full flex justify-center items-center;
    }

    .item:hover {
        @apply bg-white bg-opacity-5;
    }
</style>