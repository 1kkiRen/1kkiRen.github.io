<script lang="ts">
	import image4 from '$lib/images/image4.png';
	import image5 from '$lib/images/image5.jpg';
	import image6 from '$lib/images/image6.png';
</script>

<section class="projects" id="projects-section">
	<div class="title">
		<h2>My Projects</h2>
	</div>
	<div id="carouselExampleDark" class="carousel slide">
		<div class="carousel-indicators">
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="0"
				class="active"
				aria-current="true"
				aria-label="Slide 1"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="1"
				aria-label="Slide 2"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="2"
				aria-label="Slide 3"
			/>
		</div>

		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="10000">
				<img src={image4} class="d-block w-100" alt="..." />
				<div class="carousel-caption">
					<h5>
						<a href="https://github.com/1kkiRen/Tokenizer-Changer" target="_blank" rel="noreferrer"
							>TokenizerChanger</a
						>
					</h5>
					<p>Open-source toolkit for modifying existing tokenizer vocabularies.</p>
					<p class="links">
						<a href="https://pypi.org/project/TokenizerChanger/" target="_blank" rel="noreferrer">PyPI</a>
						<span>·</span>
						<a href="https://github.com/1kkiRen/Tokenizer-Changer" target="_blank" rel="noreferrer">GitHub</a>
					</p>
				</div>
			</div>
			<div class="carousel-item" data-bs-interval="2000">
				<img src={image5} class="d-block w-100" alt="..." />
				<div class="carousel-caption">
					<h5>
						<a href="https://github.com/1kkiRen/Embeddings-Division" target="_blank" rel="noreferrer"
							>EmbeddingsDivision</a
						>
					</h5>
					<p>Library for separating and reusing embedding layers in large language models.</p>
					<p class="links">
						<a href="https://pypi.org/project/embdiv" target="_blank" rel="noreferrer">PyPI</a>
						<span>·</span>
						<a href="https://github.com/1kkiRen/Embeddings-Division" target="_blank" rel="noreferrer">GitHub</a>
					</p>
				</div>
			</div>
			<div class="carousel-item">
				<img src={image6} class="d-block w-100" alt="..." />
				<div class="carousel-caption">
					<h5>CRUD Calendar LLM Chatbot</h5>
					<p>Telegram assistant that manages schedules and summarizes news with LLM-powered reasoning.</p>
					<p class="links">
						<span><a href="mailto:1kkiren@mail.ru?subject=Calendar%20LLM" rel="noreferrer">Request demo</a></span>
					</p>
				</div>
			</div>
		</div>
		<button
			class="carousel-control-prev"
			type="button"
			data-bs-target="#carouselExampleDark"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next"
			type="button"
			data-bs-target="#carouselExampleDark"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>
	<!-- <div class="projects-list">
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
	</div> -->
</section>

<style>
	@import '$lib/css/portfolio/projects.css';
</style>
