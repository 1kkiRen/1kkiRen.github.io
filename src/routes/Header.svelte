<script lang="ts">
	export const scrollToSec = (section: string) => {
		const element = document.querySelector(section) as HTMLElement;
		element.scrollIntoView({ behavior: 'smooth' });
	};
</script>


<nav class="navbar fixed-top navbar-expand-lg">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Portfolio</a>
		<div class="dropstart">
			<button
				class="dropdown-toggle" data-bs-toggle="dropdown"
				data-bs-auto-close="outside" aria-expanded="false"
			>
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li><a class="dropdown-item" href="/APIWorker">APIWorker</a></li>
			</ul>
		</div>
	</div>
	<div class="container" id="navbarSupportedContent">
		<ul class="nav justify-content-center">
			<li class="nav-item">
				<a class="nav-link" aria-current="page" href="/#home-section">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/#about-section">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/#skills-section">Skills</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/#projects-section">Projects</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/#contact-section">Contact</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/#social-media-section">Social</a>
			</li>
			
		</ul>
	</div>
</nav>

<style>
	@import '$lib/css/portfolio/header.css';
</style>
