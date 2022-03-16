const getImage = async() => {

    const apiKey = 'r7MeC1iuulaqLoqzTaOKjApIlISv5vpI';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await response.json();
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    return url;
}

getImage()
    .then(console.log)
    .catch(console.error);

