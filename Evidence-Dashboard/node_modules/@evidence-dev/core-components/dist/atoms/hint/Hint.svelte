<script context="module">
	export const evidenceInclude = true;
</script>

<script>
	import { fade } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { InfoCircle } from '@steeze-ui/tabler-icons';

	/** @type {import('@steeze-ui/svelte-icon').IconSource} */
	export let icon = InfoCircle;

	let visible = false;

	const showMessage = () => (visible = true);
	const hideMessage = () => (visible = false);
</script>

<span
	on:focus={showMessage}
	on:blur={hideMessage}
	on:mouseenter={showMessage}
	on:mouseleave={hideMessage}
	class="additional-info-icon"
	role="tooltip"
>
	<Icon src={icon} class="w-5 h-5" />

	{#if visible}
		<span transition:fade class="info-msg">
			<slot />
		</span>
	{/if}
</span>

<style scoped>
	span.additional-info-icon {
		width: 18px;
		color: var(--grey-600);
		display: inline-block;
		vertical-align: middle;
		line-height: 1em;
		cursor: help;
		position: relative;
		text-transform: none;
	}

	.info-msg {
		position: absolute;
		top: -5%;
		left: 115%;
		z-index: 50;
		min-width: 200px;
		max-width: 24rem;
		border-radius: 0.25rem;
		background-color: rgb(17 24 39 / 0.9);
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
}</style>
