<script lang="ts">
	import About from './About.svelte';
	import Home from './Home.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import Social from './Social.svelte';
	import Header from './Header.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		window.onscroll = function () {
			const header = document.getElementById('container-header') as HTMLDivElement;
			const navbar = document.querySelector('nav') as HTMLDivElement;
			if (window.scrollY > 0) {
				header.style.height = '11.5vh';
				navbar.style.marginLeft = '1vw';
			} else {
				header.style.height = '100vh';
				navbar.style.marginLeft = '20vw';
			}
		};
	});
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio using SvelteKit" />
	<!-- <link rel="icon" href="%sveltekit.assets%/portfolio.png" /> -->
</svelte:head>

<section>
	<!-- <div style="height: 45vh; background-color: #1c2333;" /> -->
	<Header />
	<div style="height: 100vh; background-color: #1c2333;" />

	<Home />
	<About />
	<Skills />
	<Projects />
	<Contact />
	<Social />
</section>
