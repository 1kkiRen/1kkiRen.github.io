<script lang="ts">
	export const scrollToSec = (section: string) => {
		const element = document.querySelector(section) as HTMLElement;
		element.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<header id="headerP">
	<div class="navigation_bar">
		<div class="main-title" id="main-title">
			<div class="dropdown" id="dropdown">
				<a href="/">Portfolio</a>
				<div class="arrow" id="arrow" />
			</div>

			<ul class="dropdown-content" id="dropdown-content">
				<li><a href="/APIWorker">APIWorker</a></li>
			</ul>
		</div>
		<div class="nav">
			<ul>
				<li>
					<button id="home" on:click|preventDefault={() => scrollToSec('#home-section')}
						>Home</button
					>
				</li>
				<li>
					<button id="about" on:click|preventDefault={() => scrollToSec('#about-section')}
						>About</button
					>
				</li>
				<li>
					<button id="skills" on:click|preventDefault={() => scrollToSec('#skills-section')}
						>Skills</button
					>
				</li>
				<li>
					<button id="projects" on:click|preventDefault={() => scrollToSec('#projects-section')}
						>Projects</button
					>
				</li>
				<li>
					<button id="contact" on:click|preventDefault={() => scrollToSec('#contact-section')}
						>Contact</button
					>
				</li>
				<li>
					<button id="social" on:click|preventDefault={() => scrollToSec('#social-media-section')}
						>Social</button
					>
				</li>
			</ul>
		</div>
	</div>
</header>

<style>
	@import '$lib/css/portfolio/header.css';
</style>
