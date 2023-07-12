<script lang="ts">
    export let link: string;
</script>

<a
        href={link}
        class="p-2 shadow-2xl bg-gray-800 rounded hover:bg-opacity-75 text-xl"
>
    <slot/>
</a>