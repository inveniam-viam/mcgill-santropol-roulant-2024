<script>
	import { createEventDispatcher } from 'svelte';
	import { scale, fly } from 'svelte/transition';

	export let id;
	/** @type {import("@evidence-dev/component-utilities/stores).ToastStatus } */
	export let status = 'info';
	export let title;
	export let message;
	export let dismissable = true;
	const dispatch = createEventDispatcher();

	const dismiss = () => {
		if (dismissable) dispatch('dismiss', { id });
	};
</script>

<div
	role="none"
	class="print:hidden rounded py-1 px-3 my-4 mx-0 shadow-md text-xs font-mono flex justify-between transition-all duration-300 border {status ??
		''}"
	in:scale
	out:fly|local={{ x: 1000, duration: 1000, delay: 0, opacity: 0.8 }}
	on:click={dismiss}
	on:keypress={dismiss}
>
	{#if title}
		<span class="cursor-pointer font-bold pr-8 flex items-center">{title}</span>
	{/if}
	<span class="cursor-pointer">{message}</span>
</div>

<style>
	.error {

    --tw-border-opacity: 1;

    border-color: rgb(254 202 202 / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: rgb(254 242 242 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(153 27 27 / var(--tw-text-opacity))
}

	.warning {

    --tw-border-opacity: 1;

    border-color: rgb(254 240 138 / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: rgb(254 252 232 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(133 77 14 / var(--tw-text-opacity))
}

	.success {

    --tw-border-opacity: 1;

    border-color: rgb(187 247 208 / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: rgb(240 253 244 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(22 101 52 / var(--tw-text-opacity))
}

	.info {

    --tw-border-opacity: 1;

    border-color: rgb(229 231 235 / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(31 41 55 / var(--tw-text-opacity))
}</style>
