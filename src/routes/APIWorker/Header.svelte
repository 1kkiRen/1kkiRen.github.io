<script>
	import { base } from '$app/paths';
</script>

<header id="header">
	<div class="main-title" id="main-title">
		<div class="dropdown" id="dropdown">
			<a href="{base}/APIWorker">API Worker</a>
			<div class="arrow" id="arrow" />
		</div>
		<ul class="dropdown-content" id="dropdown-content">
			<li><a href="/">Portfolio</a></li>
		</ul>
	</div>

	<div class="request-sender" id="request-sender">
		<p class="request-sender-p" id="request-sender-p">Enter your email:</p>
		<input type="text" id="email" />
		<button id="submit">Submit</button>
	</div>

	<style>
		header {
			width: 100%;
			height: 100vh;
			padding: 3.5rem 9rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #1c2333;
			border-bottom: 2px solid #151a25;
			transition: all 1s ease-in-out;
		}

		header.shrink {
			position: fixed;
			height: 50px;
			transition: all 1s ease-in-out;
		}

		header .dropdown {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: baseline;
			transition: all 0.3s ease-in-out;
		}

		header .dropdown-content {
			opacity: 0;
			height: 0;
			overflow: hidden;
			transition: all 0.5s ease-in-out;
		}

		.dropdown-content.show {
			opacity: 1;
			height: 3rem;
		}

		header .dropdown-content li {
			list-style: none;
			transition: all 0.3s ease-in-out;
		}

		header .dropdown-content li a {
			text-decoration: none;
			color: #fff6ec;
			font-size: 1.5rem;
			transition: all 0.3s ease-in-out;
		}

		header .dropdown-content li:hover {
			border-bottom: 2px solid #fff6ec;
		}

		header .main-title .dropdown .arrow {
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 5px solid #fff6ec;
			transition: all 0.3s ease-in-out;
		}

		header .main-title:hover .arrow {
			border-top: 5px solid #1c2333;
			transition: all 0.3s ease-in-out;
		}

		header .main-title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease-in-out;
		}

		header .main-title a {
			font-size: 3rem;
			color: #fff6ec;
			text-decoration: none;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			opacity: 1;
			transition: all 0.3s ease-in-out;
		}

		.request-sender.hide {
			display: inline-block;
			overflow: hidden;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender p {
			font-size: 1.5rem;
			color: #fff6ec;
			margin-bottom: 1rem;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender input {
			width: 20rem;
			height: 3rem;
			border: 2px solid #fff6ec;
			border-radius: 5px;
			padding: 0 1rem;
			margin-bottom: 1rem;
			font-size: 1rem;

			transition: all 0.3s ease-in-out;
		}

		header .request-sender button {
			width: 10rem;
			height: 3rem;
			border: 2px solid #fff6ec;
			border-radius: 5px;
			background-color: #1c2333;
			font-size: 1rem;
			color: #fff6ec;
			transition: all 0.3s ease-in-out;
		}

		header .request-sender button:hover {
			background-color: #fff6ec;
			color: #1c2333;
			transition: all 0.3s ease-in-out;
		}
	</style>
</header>
