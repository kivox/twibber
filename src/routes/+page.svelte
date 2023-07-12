<script>
    import Box from "~/components/Box.svelte";
</script>

<Box
    title="Home"
    buttons={[
        {
            title: "For you",
            href: "/"
        },
        {
            title: "Following",
            href: "/following"
        }
    ]}
>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
</Box>