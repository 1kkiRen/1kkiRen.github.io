<section class="publications" id="publications-section">
	<div class="title">
		<h2>Publications</h2>
		<p>Researching tokenizer adaptation and cost-efficient strategies for large language models.</p>
	</div>
	<div class="papers">
		<article>
			<h3>A Multi-Aspect Evaluation of Tokenizer Adaptation Methods for LLM on Russian</h3>
			<div class="meta">AI Journey 2025 · Co-author · 2024 – 2025 · Accepted (poster)</div>
			<p>
				Systematic comparison of 4 BPE tokenizer adaptation methods for Russian-language LLMs across
				3 benchmarks (MERA, MMLU, TA bench) and additional statistical methods. The best method
				reduces fragmentation from 3.7 to 2.34 (&minus;36.7%).
			</p>
			<p class="links">
				<a href="https://www.mathnet.ru/eng/danma690" target="_blank" rel="noreferrer">mathnet.ru</a
				>
			</p>
		</article>
		<article>
			<h3>Mitigating the Impact of Glitch Tokens via Targeted Retokenization</h3>
			<div class="meta">AACL 2026 · Co-author · 2025 – 2026 · Under review</div>
			<p>
				An inference-time retokenization method that removes under-trained ("glitch") tokens based
				on embedding norm/entropy; no model fine-tuning required. Evaluated on 6 models (1.5B – 32B)
				on MMLU and WMT: +7% improvement in robustness to glitch prompts.
			</p>
		</article>
		<article>
			<h3>
				TokenSubstitution: Cost-Efficient Method of Language Adaptation Based on Token
				"Trained-ness"
			</h3>
			<div class="meta">EMNLP 2026 · First author · 2025 – 2026 · Under review</div>
			<p>
				A method for adapting an LLM to a new language by replacing weakly trained tokens with
				tokens of the target language, without full embedding fine-tuning. &minus;15% inference
				latency while surpassing the original model on the MERA benchmark.
			</p>
		</article>
	</div>
</section>

<style>
	@import '$lib/css/portfolio/publications.css';
</style>
