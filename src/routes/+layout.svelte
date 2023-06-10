<script>
    // import tailwind
    import "@/styles/tailwind.css"

    // Svelte Components
    import Navbar from "@/components/Layout/Navbar.svelte";
    import Sidebar from "@/components/Layout/Sidebar.svelte";
</script>

<svelte:head>
    <title>Twibber</title>
</svelte:head>

<div class="bg-white dark:bg-black text-black dark:text-white">
    <div class="grid grid-cols-4 mx-auto border-x border-black max-w-screen-xl min-h-screen">
        <Navbar/>
        <main class="border-x border-black col-span-2">
            <slot/>
        </main>
        <Sidebar/>
    </div>
</div>