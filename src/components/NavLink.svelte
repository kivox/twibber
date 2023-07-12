<script lang="ts">
    export let href: string;
</script>

<a
        href={href}
        class="p-2 bg-gray-800 rounded hover:bg-opacity-75 text-lg transition"
>
    <slot/>
</a>