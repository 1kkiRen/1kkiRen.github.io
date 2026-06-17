<section class="experience" id="experience-section">
	<div class="title">
		<h2>Experience</h2>
		<p>Hands-on roles delivering large language model research, productionization, and tooling.</p>
	</div>
	<div class="timeline">
		<article>
			<header>
				<h3>NLP Engineer · Neural Systems and Deep Learning Lab, MIPT</h3>
				<span class="meta">Moscow, Russia · May 2025 – present</span>
			</header>
			<ul>
				<li>
					Maintain and scale LLM inference across 3 clusters of 17 GPUs (NVIDIA A100/H100 and
					MetaX), serving 6 models from 14B Dense to 1T MoE at 150k+ requests/day; reduced p95
					latency from 3000 ms to 2500 ms (17%).
				</li>
				<li>Lead research on uncertainty estimation in the reasoning of large language models.</li>
				<li>
					Designed and deployed a LangGraph agentic pipeline that generates Selenium tests from
					natural-language descriptions.
				</li>
				<li>
					Designed the architecture of a co-pilot for automating call-center operator workflows.
				</li>
				<li>
					Designed an LLM-uncertainty evaluation benchmark covering 40+ models across 4 domains.
				</li>
				<li>
					Launched a recurring LLM-eval (LLM-as-a-Judge, benchmark criteria) pipeline on MetaX GPUs.
				</li>
			</ul>
		</article>
		<article>
			<header>
				<h3>Visiting Researcher, NLP · MBZUAI</h3>
				<span class="meta">Abu Dhabi, UAE (remote) · Jun 2025 – present</span>
			</header>
			<ul>
				<li>
					Lead research on adapting LLM tokenizers to Russian on Qwen2.5-1.5B-Instruct (1000+
					GPU-hours), achieving a 17% reduction in fertility relative to the baseline tokenizer.
				</li>
				<li>Proposed and implemented an alternative tokenization method.</li>
				<li>Coordinated experiments with collaborating research teams.</li>
			</ul>
		</article>
		<article>
			<header>
				<h3>Middle NLP Engineer · Center for Applied AI, Skolkovo</h3>
				<span class="meta">Moscow, Russia · Feb 2025 – May 2025</span>
			</header>
			<ul>
				<li>
					Fine-tuned Qwen2.5-VL (LoRA, r=16, 3 epochs) on a 200-drawing corpus for object detection:
					mAP@0.5 = 0.6, mAP@[.5,.95] = 0.35.
				</li>
				<li>
					Assembled an end-to-end pipeline for object detection in drawings (preprocess → inference
					→ postprocess → report) with 87% class coverage.
				</li>
				<li>Selected and A/B tested prompts for generating remarks on drawings.</li>
			</ul>
		</article>
		<article>
			<header>
				<h3>Research Assistant, NLP · Higher School of Economics</h3>
				<span class="meta">Moscow, Russia · Jun 2024 – May 2025</span>
			</header>
			<ul>
				<li>
					Fine-tuned Llama-3-8B-Instruct (SFT, 300 GPU-hours); achieved an 11.6% improvement on the
					overall MERA benchmark score.
				</li>
				<li>
					Developed a BPE tokenizer for Russian on an 80 GB corpus; reduced the average number of
					fragments per word from 3.86 to 1.5 (61% reduction).
				</li>
				<li>
					Implemented methods for manipulating existing tokenizers (token deletion / addition /
					merging) — released as the open-source library <a
						href="https://pypi.org/project/TokenizerChanger/"
						target="_blank"
						rel="noreferrer">TokenizerChanger</a
					>.
				</li>
				<li>Created a grammar benchmark for Russian, used in the AI Journey 2025 publication.</li>
			</ul>
		</article>
		<article>
			<header>
				<h3>ML / Backend Engineer · Moscow Aviation Institute</h3>
				<span class="meta">Moscow, Russia · Jul 2023 – Oct 2023</span>
			</header>
			<ul>
				<li>Developed a sentence topic classification model with 10+ classes.</li>
				<li>
					Optimized SQL queries and database schema: p95 latency reduced from ~1500 ms to ~800 ms
					(47% reduction).
				</li>
			</ul>
		</article>
		<article>
			<header>
				<h3>NLP Engineer (Internship) · Innopolis University</h3>
				<span class="meta">Innopolis, Russia · Jun 2023 – Jul 2023</span>
			</header>
			<ul>
				<li>
					Fine-tuned RuBERT for sentiment analysis of YouTube comments on a ~10k example dataset; F1
					= 0.82.
				</li>
			</ul>
		</article>
	</div>
</section>

<style>
	@import '$lib/css/portfolio/experience.css';
</style>
