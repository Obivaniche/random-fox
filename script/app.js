const button = document.querySelector('.button');
const image = document.querySelector('.card__image');
const url = 'https://randomfox.ca/floof/';

async function fetchHendler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.image;
    } catch (error) {
        console.log(error);
    }
};

button.addEventListener('click', () => {
    let isLoaded = image.complete;

    if (isLoaded) {
        fetchHendler();
    }
});