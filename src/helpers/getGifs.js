export const getGifs = async (category) => {

    const url = `https:api.giphy.com/v1/gifs/search?api_key=B9Z9WdAFPsRybSRqT4eNUyp4UYTvyJOp&limit=2&q=${ category }`;
    const resp = await fetch(url);

    await new Promise(r => setTimeout(r, 800));

    const { data } = await resp.json();

    

    const gifs =  data.map( img => ({    
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


    return gifs;
}