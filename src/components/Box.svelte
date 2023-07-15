<script lang="ts">
	import {page} from "$app/stores";
	import {superForm} from "sveltekit-superforms/client";

	export let title: string;
	export let buttons: {
		label: string;
		href?: string;
		onClick?: () => void;
	}[] = [];

	export let user: {
		id: string,
		image: string
		name: string,
		email: string,
	} | undefined;

	export let dataForm;

	const {form, errors, enhance, delayed} = superForm(dataForm, {
		applyAction: true,
		invalidateAll: true,
		resetForm: true
	});
</script>

<div class="flex flex-col gap-4 relative">
    <div class="w-full bg-gray-900 sticky -top-14 rounded-b-md">
        <div class={`w-full flex p-4 font-medium text-2xl`}>
            {title}
        </div>
        {#if buttons.length > 0}
            <hr class="border-gray-800">
            <div class="flex flex-row w-full gap-2 p-2 sticky top-0">
                {#each buttons as button}
                    <a href={button.href} class="w-full text-center bg-gray-800 py-2 rounded">
                        {button.label}
                    </a>
                {/each}
            </div>
        {/if}
        {#if user && ["/", "/following"].includes($page.route.id)}
            <hr class="border-gray-800">
            <form method="post" action="/" class="flex flex-row gap-2 w-full h-full p-2" use:enhance>
                <div class="w-14">
                    <img src={user.image} alt="" class="w-12 h-12 rounded-full">
                </div>
                <div class="w-full h-full flex flex-col justify-center items-end">
                    <textarea
                            name="content"
                            class="w-full bg-gray-800 rounded p-2 focus:outline-none focus:ring-0"
                            placeholder="Ready to tweeb your mind?"
                            bind:value={$form.content}
                    ></textarea>
                    <div class="w-full flex flex-row justify-center items-center">
                        {#if $errors.content}
                            <p class="text-red-500 text-xs text-left w-full mt-1 font-normal">{$errors.content}</p>
                        {/if}
                        <div class="flex-grow"></div>
                        <button type="submit"
                                class="px-4 py-2 bg-blue-600 rounded hover:bg-opacity-75 text-center mt-2 transition disabled:bg-opacity-75"
                                disabled={$delayed}
                        >
                            {#if $delayed}
                                Tweebing...
                            {:else}
                                Tweeb
                            {/if}
                        </button>
                    </div>
                </div>
            </form>
        {/if}
    </div>

    <div class="flex flex-col gap-4">
        <slot/>
    </div>
</div>
