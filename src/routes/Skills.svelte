<script>
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
	<style>
		.skills {
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 0 9rem;
			background-color: #1c2333;
		}
	
		.skills .title {
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	
		.skills .title h2 {
			color: #fff6ec;
			font-size: 2rem;
			font-weight: 600;
			text-transform: uppercase;
			margin-bottom: 0.65rem;
		}
	
		.skills .title p {
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			margin-bottom: 1.5rem;
		}
	
		.skills .title .CV .btn {
			display: inline-block;
			padding: 0.8rem 2.5rem;
			border: 2px solid #fff6ec;
			background-color: #1c2333;
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			text-decoration: none;
			text-transform: uppercase;
			transition: all 0.3s ease-in-out;
		}
	
		.skills .title .CV .btn:hover {
			background-color: #fff6ec;
			color: #1c2333;
		}
	
		.skills .content {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
		}
	
		.skills .content .images {
			width: 100%;
			height: auto;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	
		.skills .content .images img {
			width: 35%;
			height: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
			transition: all 0.5s ease-in-out;
		}
	
		.skills .content .images img:hover {
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
		}
	</style>
</section>

