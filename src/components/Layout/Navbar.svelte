<script>
    import {onMount} from 'svelte'

    // darkmode handler
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

<div class="p-2">
    <h1 class="text-2xl font-bold text-black bg-white w-full text-center p-2 rounded-full">twibber</h1>
</div>