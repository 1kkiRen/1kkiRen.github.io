<script>
	import image2 from '$lib/images/image2.jpg';
</script>

<div id="requested-content" class="requested-content">
	<h2 id="title">Something went wrong, sorry!</h2>
	<img id="image" src={image2} alt="Your comic is loading. Wait a bit, please!" />
	<p id="date" />
	<p id="date-from-publish" />
	<style>
		.requested-content {
			width: 100%;
			height: 100vh;
			padding: 3.5rem 9rem;
			display: none;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #1c2333;
			transition: all 1s ease-in-out;
		}

		.requested-content.show {
			display: flex;
		}

		.requested-content h2 {
			font-size: 3rem;
			color: #fff6ec;
			margin-bottom: 1rem;
			transition: all 0.3s ease-in-out;
		}

		.requested-content img {
			width: 40%;
			height: 40%;
			object-fit: scale-down;
			margin-bottom: 1rem;
			transition: all 0.3s ease-in-out;
		}

		.requested-content p {
			font-size: 1.5rem;
			color: #fff6ec;
			transition: all 0.3s ease-in-out;
		}
	</style>
</div>
