<script>
	import About from './About.svelte';
	import Home from './Home.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import Social from './Social.svelte';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio using SvelteKit" />
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
