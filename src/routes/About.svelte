<script lang="ts">
	import image2 from '$lib/images/image2.jpg';
</script>

<section class="about" id="about-section">
	<div class="title">
		<h2>About Me</h2>
		<p>
			NLP/ML engineer with experience in both research and product work on large language models.
			Specialized in fine-tuning (SFT, LoRA/QLoRA) and inference of open-weight models (Qwen2.5-VL,
			Kimi2.6), building agentic pipelines (LangGraph, LangChain, LiteLLM), and research on
			tokenization and LLM uncertainty estimation.
		</p>
		<p>
			Publications include AI Journey 2025 (accepted, poster) and two A*&nbsp;conference papers
			currently under review. Hands-on with GPU clusters (NVIDIA, MetaX), CUDA, Docker, and Git
			&mdash; comfortable moving from a notebook to a production serving stack.
		</p>
	</div>
	<div class="content">
		<div class="image">
			<img src={image2} alt="Something went wrong" />
		</div>
	</div>
</section>

<style>
	@import '$lib/css/portfolio/about.css';
</style>
