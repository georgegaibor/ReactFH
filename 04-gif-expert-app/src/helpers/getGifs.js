
export const getGifs = async( searchCategory ) => {
    const apiKey = 'j5sfWx7quDgX4YT35gxFcUZ4Fet5pHX1';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchCategory)}&limit=10&api_key=${apiKey}`);
    const { data } = await response.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

   return gifs;
};
