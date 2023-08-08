<script lang="ts">
	export const scrollToSec = (section: string) => {
		const element = document.querySelector(section) as HTMLElement;
		element.scrollIntoView({ behavior: 'smooth' });
	};
</script>


<div class="container-header fixed-top" id="container-header">
	<nav class="navbar">
		<div class="btn-group dropdown">
			<a class="navbar-brand btn" href="/">
				Portfolio
			</a>
			<button type="button" class="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
				<span class="visually-hidden"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="/APIWorker">APIWorker</a></li>
			</ul>
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
</div>

<style>
	@import '$lib/css/portfolio/header.css';
</style>
