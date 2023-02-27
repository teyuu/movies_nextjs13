//Get movies and series trending
const getTrendingAll = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&page=${1}`
    );
    const res = await data.json();
    return res.results
}

//Movies
const getTopRatedMovies = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    const res = await data.json();
    return res.results;
}

const getPopularMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const res = await data.json()
    return res.results
}


//Series
const getTopRatedSeries = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const res = await data.json()
    return res.results;
}

const getPopularSeries = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const res = await data.json()
    return res.results;
}

export {
    getTrendingAll,
    getTopRatedMovies,
    getPopularMovies,
    getTopRatedSeries,
    getPopularSeries
}