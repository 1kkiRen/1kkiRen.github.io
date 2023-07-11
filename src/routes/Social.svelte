<script>
	import github_logo from '$lib/images/github.png';
	import telegram_logo from '$lib/images/telegram.png';
	import vk_logo from '$lib/images/vk.png';
</script>

<section class="social-media" id="social-media-section">
	<div class="content">
		<div class="title">
			<h2>Social Links</h2>
		</div>
		<ul class="social-media-links">
			<li class="github" id="gh-link">
				<a href="https://github.com/1kkiRen"><img src={github_logo} alt="" /></a>
			</li>
			<li class="telegram" id="tg-link">
				<a href="https://t.me/ikkiren"><img src={telegram_logo} alt="" /></a>
			</li>
			<li class="vk" id="vk-link">
				<a href="https://vk.com/1kkiren"><img src={vk_logo} alt="" /></a>
			</li>
		</ul>
	</div>
	<style>
		.social-media {
			width: 100%;
			height: 100vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 9rem;
			background-color: #fff6ec;
		}
	
		.social-media .content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	
		.social-media .content .title {
			width: 50%;
		}
	
		.social-media .content .title h2 {
			color: #151a25;
			font-size: 2rem;
			font-weight: 600;
			text-transform: uppercase;
		}
	
		.social-media .content .social-media-links {
			width: 50%;
			display: flex;
			justify-content: space-between;
		}
	
		.social-media .content .social-media-links .github {
			width: 8rem;
			height: 8rem;
			border-radius: 50%;
			background-color: #fff6ec;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease-in-out;
		}
	
		.social-media .content .social-media-links .telegram {
			width: 8rem;
			height: 8rem;
			border-radius: 50%;
			background-color: #fff6ec;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease-in-out;
		}
	
		.social-media .content .social-media-links .vk {
			width: 8rem;
			height: 8rem;
			border-radius: 50%;
			background-color: #fff6ec;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s ease-in-out;
			object-fit: scale-down;
		}
	
		.social-media .content img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.3s ease-in-out;
		}
	
		.social-media .content img:hover {
			transform: scale(1.2);
		}
	</style>
</section>

