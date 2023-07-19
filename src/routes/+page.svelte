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
		const mainTitle = document.querySelector('#main-title') as HTMLHeadingElement;
		const dropdownContent = document.querySelector('#dropdown-content') as HTMLDivElement;

		function toggleDropdown() {
			dropdownContent.classList.toggle('show');
		}

		mainTitle.addEventListener('mouseover', toggleDropdown, true);
		mainTitle.addEventListener('mouseout', toggleDropdown, false);

		window.onscroll = function () {
			const header = document.querySelector('header') as HTMLDivElement;
			if (window.scrollY > 0) {
				header.classList.add('shrink');
			} else {
				header.classList.remove('shrink');
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
	<Header />

	<div style="height: 50vh; background-color: #1c2333;" />

	<Home />
	<About />
	<Skills />
	<Projects />
	<Contact />
	<Social />
</section>
