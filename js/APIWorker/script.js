const email = document.getElementById('email');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
        
const title = document.getElementById('title');
const image = document.getElementById('image');
const date = document.getElementById('date');
        
const list = document.getElementById('list');
const mainTitle = document.getElementById('main-title');
        
mainTitle.addEventListener('mouseover', showList, true);
mainTitle.addEventListener('mouseout', showList, false);

const header = document.getElementById('header');
        
const requestedContent = document.getElementById('requested-content');
const requestSender = document.getElementById('request-sender');
const requestSenderP = document.getElementById('request-sender-p');
        

function showList() {
    list.classList.toggle('show');
}

submit.addEventListener('click', () => {
    if (!validateEmail()) {
        return;
    }
    const params = new URLSearchParams();
    params.append('email', email.value);
    console.log(params.toString());
    const api = fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
    api.then(
        response => {
            response.json().then(
                data => {
                    console.log(data);
                    console.log(data.id);
                    const comic = fetch(`https://fwd.innopolis.university/api/comic?id=${data}`);
                    comic
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            console.log(data);
                            title.textContent = data.safe_title;
                            image.src = data.img;
                            image.alt = data.alt;
                            date.textContent = new Date(data.year, data.month, data.day).toLocaleDateString();
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            ).catch(error => {
                console.error(error);
            });
        }
    ).catch(error => {
        console.error(error);
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



