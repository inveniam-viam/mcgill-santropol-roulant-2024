<h2>Deploying to Evidence Cloud</h2>
<p>Evidence Cloud allows you to:</p>
<ul>
	<li>Host your project at <code>{'<'}project-name{'>'}.evidence.app</code></li>
	<li>Authenticate users</li>
	<li>Schedule updates to your data</li>
	<li>Re-build when you push changes to your project</li>
</ul>

<div class="new-format-buttons my-3">
	<button type="button">
		<a
			class="text-white no-underline hover:no-underline"
			target="_blank"
			rel="noreferrer"
			href="https://evidence.app">Sign Up</a
		>
	</button>
</div>

<style>
	h2 {
		padding-top: 0.75rem;
		padding-bottom: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
}

	p {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
}

	button {
		margin-right: 0.25em;
		margin-left: 0.25em;
		font-style: normal;
		text-decoration: none;
		font-size: 14px;
		cursor: pointer;
		background-color: var(--blue-600);
		color: white;
		font-weight: bold;
		border-radius: 4px;
		border: 1px solid var(--blue-700);
		padding: 0.4em 1.1em;
		transition-property: background, color;
		transition-duration: 350ms;
	}

	div.new-format-buttons {
		display: flex;
		justify-content: flex-start;
		padding-top: 0.5em;
	}

	ul {
		list-style: none;
		padding-inline-start: 0px;
	}

	ul li::before {
		content: '\2022';
		color: var(--grey-800);
		font-weight: bold;
		display: inline-block;
		width: 0.9em;
		margin-left: 1.5em;
	}</style>
