<script lang="ts">
    export let title: string;
	export let buttons: {
		label: string,
		href?: string,
		onClick?: () => void
	}[] = [];
</script>

<div class="flex flex-col gap-4 relative">
    <div class="w-full bg-gray-900 rounded-b sticky -top-14">
        <div class="w-full flex p-4">
            {title}
        </div>
        <hr class="border-gray-800">
        {#if buttons.length > 0}
            <div class="flex flex-row w-full gap-2 p-2 sticky top-0">
                {#each buttons as button}
                    <a href={button.href} class="w-full text-center bg-gray-800 py-2 rounded">
                        {button.label}
                    </a>
                {/each}
            </div>
        {/if}
    </div>

    <div class="flex flex-col gap-4">
        <slot/>
    </div>
</div>