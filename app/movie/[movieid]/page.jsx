import Image from "next/image";

export default async function movieDetail({params}){
    const { movieid } = params;
    const imagePath = 'https://image.tmdb.org/t/p/original'
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`)
    const res = await data.json()

    return(
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime}</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded text-sm">{res.status}</h2>
                <Image
                className="my-12 w-50"
                src={imagePath+ res.backdrop_path}
                width={1000}
                height={1000}
                priority
                />
                <p>{res.overview}</p>
            </div>
        </div>
    )
}