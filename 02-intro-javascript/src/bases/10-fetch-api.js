const apiKey = 'r7MeC1iuulaqLoqzTaOKjApIlISv5vpI';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
    .then( response => response.json())
    .then( ({ data }) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append (img);
    })
    .catch(console.warn);