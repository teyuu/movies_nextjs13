import Image from "next/image";
import {AiOutlineStar} from 'react-icons/ai'

export default async function MovieDetail({ params }) {
  const { movieid } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const res = await data.json();

  const releaseDate = new Date(res.release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[80%] flex flex-col items-center justify-center gap-10  bg-gray-400 bg-opacity-20 rounded-2xl p-8  m-auto my-10">
      <h1 className="text-3xl font-bold underline">{res.title}</h1>
      <Image
        className="rounded-md"
        src={imagePath + res.backdrop_path}
        alt={`${res.title}`}
        width={850}
        height={0}
      />
      <div className="flex sm:justify-between sm:flex-row w-[80%] flex-col gap-5">
        <h2 className="text-lg">{releaseDate}</h2>
        <h2>Runtime: {res.runtime} min</h2>
        <span
          className={`inline-block py-2 px-4 rounded text-sm font-bold ${
            res.status === "Released" ? "bg-green-600" : "bg-gray-500"
          }`}
        >
          Status: {res.status}
        </span>
        <div className="flex flex-row gap-2 ">
        <AiOutlineStar className="m-auto"/>
        <span className="m-auto">{res.vote_average}</span>
        </div>
      </div>
      <div className="w-[80%]">
        <p className="text-lg">{res.overview}</p>
      </div>
    </div>
  );
}
