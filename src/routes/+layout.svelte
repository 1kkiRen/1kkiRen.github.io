<script>
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<style>
	@import '$lib/css/portfolio/footer.css';		
</style>

<div class="app">
	<main>
		<slot />
	</main>
	<Footer />
</div>
