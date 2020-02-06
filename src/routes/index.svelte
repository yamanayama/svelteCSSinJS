<script>
	import AppButton from '../components/AppButton.svelte'
	// import style from '../apps/style/style.css';
	import { title, comicSans, box } from '../apps/style/style.js';

</script>

<style>
	 /* :global(h1){
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;

		/* @media (min-width: 480px) {//これはかけない
			h1 {
				font-size: 4em;
			}
		} */
	/* }
	@media (min-width: 480px) {
		:global(h1){
			font-size: 4em;
		}
	} */

	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	p {
		margin: 1em auto;
	}

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<div class="{title} {comicSans}">
	<h1>
		<div class={box}>
			<div class={box}>
				<div class={box}>CSS</div>
				in JS
			</div>
			in HTML
		</div>
	</h1>
</div>

<AppButton secondary />

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
