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
				<h3>LLM / NLP</h3>
				<ul>
					<li>PyTorch, Hugging Face Transformers</li>
					<li>PEFT (LoRA / QLoRA), SFT</li>
					<li>Tokenization (BPE, SentencePiece)</li>
					<li>vLLM, Triton inference</li>
				</ul>
			</div>
			<div class="card">
				<h3>Agentic &amp; RAG</h3>
				<ul>
					<li>LangChain, LangGraph</li>
					<li>LiteLLM routing across providers</li>
					<li>Pydantic data models</li>
					<li>Qdrant vector store</li>
				</ul>
			</div>
			<div class="card">
				<h3>MLOps / Infra</h3>
				<ul>
					<li>CUDA, Docker, Git, Linux, Bash</li>
					<li>Weights &amp; Biases experiment tracking</li>
					<li>Distributed inference on NVIDIA &amp; MetaX GPUs</li>
				</ul>
			</div>
			<div class="card">
				<h3>Data &amp; Backend</h3>
				<ul>
					<li>Python, NumPy, Pandas, scikit-learn</li>
					<li>SQL query optimization</li>
					<li>FastAPI services</li>
				</ul>
			</div>
			<div class="card">
				<h3>Languages</h3>
				<ul>
					<li>English (C1, confirmed)</li>
					<li>Russian (native)</li>
				</ul>
			</div>
			<div class="card">
				<h3>Soft Skills</h3>
				<ul>
					<li>Flexibility</li>
					<li>Responsibility</li>
					<li>Enthusiasm</li>
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
