import {formatDistanceToNow} from 'date-fns';

const email = document.getElementById('email') as HTMLInputElement;
const submit = document.getElementById('submit') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLDivElement;
        
const title = document.getElementById('title') as HTMLHeadingElement;
const image = document.getElementById('image') as HTMLImageElement;
const date = document.getElementById('date') as HTMLParagraphElement;  
const dateFromPublish = document.getElementById('date-from-publish') as HTMLParagraphElement;      

const header = document.getElementById('header') as HTMLDivElement;

const requestedContent = document.getElementById('requested-content') as HTMLDivElement;
const requestSender = document.getElementById('request-sender') as HTMLDivElement;
const requestSenderP = document.getElementById('request-sender-p') as HTMLParagraphElement;

const mainTitle = document.getElementById('main-title') as HTMLHeadingElement;
const dropdownContent = document.getElementById('dropdown-content') as HTMLDivElement;


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

    const api: Promise<Response> = fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);

    api
        .then((response: Response) => {
            response.json().then((data: ApiDataResponse) => {
                const comicApi: Promise<Response> = fetch(`https://fwd.innopolis.university/api/comic?id=${data}`);
                comicApi
                    .then((response: Response) => {
                        response.json().then((data: ComicResponse) => {
                            console.log(data);
                            title.textContent = data.safe_title;
                            image.src = data.img;
                            image.alt = data.alt;
                            date.textContent = new Date(data.year, data.month, data.day).toLocaleDateString();
                            // dateFromPublish.textContent = formatDistanceToNow(new Date(data.year, data.month, data.day), { addSuffix: true });
                            
                        })
                    })
                    .catch((error: Error) => {
                        console.log(error);
                    })
            })
        })
        .catch((error: Error) => {
            console.log(error);
        })

    header.classList.add('shrink');
    requestedContent.classList.add('show');
    requestSender.classList.add('hide');
    requestedContent.scrollIntoView({ behavior: 'smooth' });

});

const emailEnd: string = '@innopolis.university';
function validateEmail() {
    if (email.value.endsWith(emailEnd)) {
        return true;
    } else {
        alert('Please enter your @innopolis.university email');
        return false;
    }
}