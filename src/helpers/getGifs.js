export const getGifs = async(category) => {
            let randomOffset = Math.floor(Math.random() * 70);

    if ( randomOffset > 65 ) {
            randomOffset - 5
            }
    
            const url = `https://api.giphy.com/v1/gifs/search?api_key=a6Ij5fCPwo2R3cJ2gp6cc2MO7xtUm87W&q=${category}&limit=5&offset=${randomOffset}`;
            const response = await fetch(url);
            const { data } = await response.json();
    
            const gifs = data.map( gif => ({
                id: gif.id,
                url: gif.images.original.url,
                title: gif.title
            }));
    
            return gifs;
        }
