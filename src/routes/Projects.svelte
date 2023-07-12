<script>
	import image4 from '$lib/images/image4.jpg';
	import image5 from '$lib/images/image5.jpg';
	import image6 from '$lib/images/image6.jpg';
</script>

<style>
	@import '$lib/css/portfolio/projects.css';
</style>

<section class="projects" id="projects-section">
	<div class="title">
		<h2>My Projects</h2>
	</div>
	<div class="projects-list">
		<div class="project">
			<a href="https://github.com/1kkiRen/Sentimental-Classifier" style="text-decoration: none;">
				<img src={image4} alt="Something went wrong" />
				<div class="desc">
					<h3>Sentimental Classifier</h3>
					<p>Model that classify review by its tone.</p>
				</div>
			</a>
		</div>
		<div class="project">
			<a href="https://github.com/1kkiRen/RPG" style="text-decoration: none;">
				<img src={image5} alt="Something went wrong" />
				<div class="desc">
					<h3>RPG game</h3>
					<p>Text RPG game on Blockchain written on Solidity</p>
				</div>
			</a>
		</div>
		<div class="project">
			<img src={image6} alt="Something went wrong" />
			<div class="desc">
				<h3>VibeChecker</h3>
				<p>Parsing comments from YouTube and making Sentimental Analysis.</p>
			</div>
		</div>
	</div>
</section>