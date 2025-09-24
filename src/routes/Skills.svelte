<script lang="ts">
	import image2 from '$lib/images/icons1.png';
	import image3 from '$lib/images/icons2.png';
	import CV from '$lib/files/CV.pdf';
</script>

<section class="skills" id="skills-section">
	<div class="title">
		<h2>My Skills</h2>
		<p>Balanced toolkit across research, engineering, and deployment for large language models.</p>
		<div class="cv">
			<a class="btn" href={CV} download="CV Dmitrii Kuzmin" style="text-decoration: none;"
				>Download CV</a
			>
		</div>
	</div>
	<div class="content">
		<div class="grid">
			<div class="card">
				<h3>NLP</h3>
				<ul>
					<li>PyTorch, Transformers, Tokenizers</li>
					<li>LangChain, custom inference tooling</li>
					<li>Dataset curation &amp; evaluation pipelines</li>
				</ul>
			</div>
			<div class="card">
				<h3>DevOps</h3>
				<ul>
					<li>Git &amp; collaborative workflows</li>
					<li>Dockerized training/inference stacks</li>
					<li>GPU optimization &amp; monitoring</li>
				</ul>
			</div>
			<div class="card">
				<h3>Back-end</h3>
				<ul>
					<li>MongoDB data modeling</li>
					<li>Telegram API integrations</li>
					<li>RESTful service design</li>
				</ul>
			</div>
			<div class="card">
				<h3>Languages</h3>
				<ul>
					<li>English (working proficiency)</li>
					<li>Russian (native)</li>
				</ul>
			</div>
			<div class="card">
				<h3>Soft Skills</h3>
				<ul>
					<li>Flexibility &amp; ownership</li>
					<li>Responsible delivery</li>
					<li>Team enthusiasm &amp; knowledge sharing</li>
				</ul>
			</div>
		</div>
		<!-- <div class="images">
			<img src={image2} alt="Stack illustration" />
			<img src={image3} alt="Tools collage" />
		</div> -->
	</div>
</section>

<style>
	@import '$lib/css/portfolio/skills.css';
</style>
