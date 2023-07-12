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
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
    <div class="h-64 w-full bg-gray-950 rounded p-4">a</div>
</Box>