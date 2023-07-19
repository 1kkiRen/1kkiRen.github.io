<script>
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<meta name="keywords" content="Svelte, SvelteKit, Portfolio, APIWorker, 1kkiren" />
	<meta name="author" content="Dmitrii Kuzmin" />
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	@import '$lib/css/portfolio/footer.css';
</style>
