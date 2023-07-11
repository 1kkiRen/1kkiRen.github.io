<script>
	import image1 from '$lib/images/image1.jpg';
</script>

<section class="home" id="home-section">
	<div class="content">
		<h3>Hello, I'm</h3>
		<h1>Dmitrii Kuzmin</h1>
		<p>First year Bachelor Student at Innopolis University.</p>
	</div>
	<div class="image">
		<img src={image1} alt="Something went wrong" />
	</div>
	<style>
		.home {
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 0 9rem;
			background-color: #1c2333;
		}

		.content h3 {
			color: #fff6ec;
			font-size: 1.5rem;
			font-weight: 500;
			text-transform: uppercase;
		}

		.content h1 {
			color: #fff6ec;
			font-size: 4rem;
			font-weight: 600;
			margin: 1rem 0;
		}

		.content p {
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			margin-bottom: 2rem;
		}

		.content .btn {
			display: inline-block;
			padding: 0.8rem 2.5rem;
			border: 2px solid #fff6ec;
			color: #fff6ec;
			font-size: 1.2rem;
			font-weight: 500;
			text-decoration: none;
			text-transform: uppercase;
			transition: all 0.3s ease-in-out;
		}

		.content .btn:hover {
			background-color: #fff6ec;
			color: #1c2333;
		}

		.image {
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.image img {
			width: 75%;
			height: 175%;
			object-fit: scale-down;
		}
	</style>
</section>
