<script>
    import "~/styles/tailwind.css"

    import Navbar from "../components/Navbar.svelte";
    import Sidebar from "../components/Sidebar.svelte";
</script>

<div class="font-medium bg-black text-white">
    <div class="grid grid-cols-8 min-h-screen max-w-screen-xl mx-auto">
        <Navbar/>
        <main class="col-span-6 p-4 border-x">
            <slot/>
        </main>
        <Sidebar/>
    </div>
</div>