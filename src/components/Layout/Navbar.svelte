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
    <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">Twibber</h1>
</div>