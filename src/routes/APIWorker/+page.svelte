<script lang="ts">
	import Content from './Content.svelte';
	import APIHeader from './APIHeader.svelte';

	import { onMount } from 'svelte';
	import { formatDistanceToNow } from 'date-fns';

	onMount(() => {
		const email = document.querySelector('#email') as HTMLInputElement;
		const submit = document.querySelector('#submit') as HTMLButtonElement;

		const title = document.querySelector('#title') as HTMLHeadingElement;
		const image = document.querySelector('#image') as HTMLImageElement;
		const date = document.querySelector('#date') as HTMLParagraphElement;
		const dateFromPublish = document.querySelector('#date-from-publish') as HTMLParagraphElement;

		const header = document.querySelector('header') as HTMLDivElement;

		const requestedContent = document.querySelector('#requested-content') as HTMLDivElement;
		const requestSender = document.querySelector('#request-sender') as HTMLDivElement;

		const mainTitle = document.querySelector('#main-title') as HTMLHeadingElement;
		const dropdownContent = document.querySelector('#dropdown-content') as HTMLDivElement;

		function toggleDropdown() {
			dropdownContent.classList.toggle('show');
		}

		mainTitle.addEventListener('mouseover', toggleDropdown, true);
		mainTitle.addEventListener('mouseout', toggleDropdown, false);

		interface ComicResponse {
			safe_title: string;
			img: string;
			alt: string;
			year: number;
			month: number;
			day: number;
		}

		interface ApiDataResponse {
			id: number;
		}

		submit.addEventListener('click', () => {
			if (!validateEmail()) {
				return;
			}

			const params: URLSearchParams = new URLSearchParams();
			params.append('email', email.value);

			const api: Promise<Response> = fetch(
				`https://fwd.innopolis.university/api/hw2?${params.toString()}`
			);

			api
				.then((response: Response) => {
					response.json().then((data: ApiDataResponse) => {
						const comicApi: Promise<Response> = fetch(
							`https://fwd.innopolis.university/api/comic?id=${data}`
						);
						comicApi
							.then((response: Response) => {
								response.json().then((data: ComicResponse) => {
									console.log(data);
									title.textContent = data.safe_title;
									image.src = data.img;
									image.alt = data.alt;
									date.textContent = new Date(data.year, data.month, data.day).toLocaleDateString();
									dateFromPublish.textContent = formatDistanceToNow(
										new Date(data.year, data.month, data.day),
										{ addSuffix: true }
									);
								});
							})
							.catch((error: Error) => {
								console.log(error);
							});
					});
				})
				.catch((error: Error) => {
					console.log(error);
				});

			header.classList.add('shrink');
			requestedContent.classList.add('show');
			requestSender.classList.add('hide');
			requestedContent.scrollIntoView({ behavior: 'smooth' });
		});

		const emailEnd = '@innopolis.university';
		function validateEmail() {
			if (email.value.endsWith(emailEnd)) {
				return true;
			} else {
				alert('Please enter your @innopolis.university email');
				return false;
			}
		}
	});
</script>

<svelte:head>
	<title>API Worker</title>
</svelte:head>

<section>
	<APIHeader />
	<Content />
</section>
