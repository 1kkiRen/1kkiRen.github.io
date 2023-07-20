<script lang="ts">
	import image2 from '$lib/images/image2.jpg';
	import image3 from '$lib/images/image3.jpg';
	import CV from '$lib/files/CV.pdf';
</script>

<section class="skills" id="skills-section">
	<div class="title">
		<h2>My Skills</h2>
		<p>
			I have knowledge of Python (especially pandas, numpy, sklearn, imblearn, mathplotlib
			libraries)
		</p>
		<p>C++, JavaScript, Solidity. Now I am studying Machine Learning.</p>
		<div class="CV">
			<a class="btn" href={CV} download="CV Dmitrii Kuzmin" style="text-decoration: none;"
				>Download CV</a
			>
		</div>
	</div>
	<div class="content">
		<div class="images">
			<img src={image2} alt="Something went wrong" />
			<img src={image3} alt="Something went wrong" />
		</div>
	</div>
</section>

<style>
	@import '$lib/css/portfolio/skills.css';
</style>
