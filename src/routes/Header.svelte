<script lang="ts">
	export const scrollToSec = (section: string) => {
		const element = document.querySelector(section) as HTMLElement;
		element.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<header id="header">
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
	<style>
		header {
			width: 100%;
			height: 100vh;
			padding: 3.5rem 9rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #1c2333;
			border-bottom: 2px solid #151a25;
			transition: all 0.5s ease-in-out;
		}

		header.shrink {
			position: fixed;
			height: 50px;
			transition: all 1s ease-in-out;
		}

		.navigation_bar {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.main-title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.main-title a {
			color: #fff6ec;
			font-size: 3rem;
			text-decoration: none;
			transition: all 0.3s ease-in-out;
		}

		.nav ul {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: auto;
			margin-left: 4rem;
			list-style: none;
		}

		.nav ul li {
			margin-left: 2rem;
		}

		.nav ul li:hover {
			padding: 0.5rem 1rem;
			border: 2px solid #fff6ec;
			transform: scale(1.1);
			transition: all 0.3s ease-in-out;
		}

		.nav ul li button {
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			text-decoration: none;
			border: none;
			background-color: transparent;
			cursor: pointer;
		}

		.dropdown {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: baseline;
			transition: all 0.3s ease-in-out;
		}

		.dropdown-content {
			opacity: 0;
			height: 0;
			overflow: hidden;
			transition: all 0.5s ease-in-out;
		}

		.dropdown-content.show {
			opacity: 1;
			height: 3rem;
		}

		.dropdown-content li {
			list-style: none;
			transition: all 0.3s ease-in-out;
		}

		.dropdown-content li a {
			text-decoration: none;
			color: #fff6ec;
			font-size: 1.5rem;
			transition: all 0.3s ease-in-out;
		}

		.dropdown-content li:hover {
			border-bottom: 2px solid #fff6ec;
		}

		.main-title .dropdown .arrow {
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 5px solid #fff6ec;
			transition: all 0.5s ease-in-out;
		}

		.main-title:hover .arrow {
			border-top: 5px solid #1c2333;
			transition: all 0.5s ease-in-out;
		}
	</style>
	<script lang="ts">
		const homeSection = document.querySelector('#home-section') as HTMLDivElement;

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
				scrollToSec('#home-section');
			} else {
				header.classList.remove('shrink');
			}
		};
		
	</script>
</header>
