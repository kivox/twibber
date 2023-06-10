<script>
    // import tailwind
    import "@/styles/tailwind.css"

    import { onMount } from 'svelte';

    let darkMode = false;

    onMount(() => {
        const theme = localStorage.getItem('theme');
        darkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList.toggle('dark', darkMode);
    });

    function toggleDarkMode() {
        darkMode = !darkMode;
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', darkMode);
    }
</script>

<svelte:head>
    <title>Twibber</title>
</svelte:head>

<div class="bg-white dark:bg-black text-black dark:text-white min-h-screen">
    <button on:click="{toggleDarkMode}">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
    <slot />
</div>