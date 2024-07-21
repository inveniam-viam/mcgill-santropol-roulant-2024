<script context="module">
	export const evidenceInclude = true;
</script>

<script>
	// Based on the alert from FlowBite: https://flowbite.com/docs/components/alerts/
	/**
	 * Defines the color of the alert
	 * @type {"default" | "info" | "danger" | "success" | "warning"}
	 */
	export let status = 'default';
</script>

<div class="alert {status}" role="alert">
	<div>
		<slot />
	</div>
</div>

<style>
	.alert {

    top: 3.5rem;

    margin-bottom: 1rem;

    border-radius: 0.25rem;

    --tw-bg-opacity: 1;

    background-color: rgb(249 250 251 / var(--tw-bg-opacity));

    padding: 0.5rem;

    --tw-text-opacity: 1;

    color: rgb(31 41 55 / var(--tw-text-opacity))
}

		.alert.info {

    --tw-bg-opacity: 1;

    background-color: rgb(239 246 255 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(30 64 175 / var(--tw-text-opacity))
}

		.alert.danger {

    --tw-bg-opacity: 1;

    background-color: rgb(254 242 242 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(153 27 27 / var(--tw-text-opacity))
}

		.alert.success {

    --tw-bg-opacity: 1;

    background-color: rgb(240 253 244 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(22 101 52 / var(--tw-text-opacity))
}

		.alert.warning {

    --tw-bg-opacity: 1;

    background-color: rgb(254 252 232 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(133 77 14 / var(--tw-text-opacity))
}

		.alert :global(p) {

    margin-bottom: 0px
}</style>
