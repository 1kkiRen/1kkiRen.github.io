<script>
	import image4 from '$lib/images/image4.jpg';
	import image5 from '$lib/images/image5.jpg';
	import image6 from '$lib/images/image6.jpg';
</script>

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
	<style>
		.projects {
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 9rem;
			background-color: #fff6ec;
		}
	
		.projects .title {
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	
		.projects .title h2 {
			color: #1c2333;
			font-size: 2rem;
			font-weight: 600;
			text-transform: uppercase;
		}
	
		.projects .projects-list {
			width: 100%;
			height: 100%;
			padding: 7% 1%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
		}
	
		.projects .projects-list .project {
			width: 35%;
			height: 50%;
			margin-bottom: 2rem;
			background-color: #1c2333;
			border-radius: 10px;
			overflow: hidden;
			transition: all 0.3s ease-in-out;
		}
	
		.projects .projects-list .project:hover {
			transform: scale(1.05);
			transition: all 0.3s ease-in-out;
		}
	
		.projects .projects-list .project img {
			width: 100%;
			height: 75%;
			object-fit: cover;
		}
	
		.projects .projects-list .project .desc {
			padding: 1rem;
		}
	
		.projects .projects-list .project .desc h3 {
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 600;
			text-transform: uppercase;
		}
	
		.projects .projects-list .project .desc p {
			color: #fff6ec;
			font-size: 1rem;
			font-weight: 500;
			margin-bottom: 1rem;
		}
	</style>
</section>

