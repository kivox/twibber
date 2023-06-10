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

<div class="bg-white dark:bg-black text-black dark:text-white min-h-screen">
    <div class="grid grid-cols-4 mx-auto border border-black max-w-screen-xl">
        <Navbar/>
        <main class="border border-black col-span-2">
            <slot/>
        </main>
        <Sidebar/>
    </div>
</div>