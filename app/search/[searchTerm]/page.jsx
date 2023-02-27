import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function SearchResult({ params }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const imgNotFound ="https://i.ibb.co/HnV1rWh/Image-not-available.png"
  const { searchTerm } = params;
  const search = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const res = await search.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Search Results for "{searchTerm}"
      </h1>
      <div className="grid gap-16 grid-cols-fluid mx-5 my-3 ">
        {res.results.map((movie) =>
          movie.poster_path ? (
            <div key={movie.id} className="rounded-lg text-center">
              <div className="flex justify-center ">
                <Image
                  src={imagePath + `${movie.poster_path}`}
                  alt={`${movie.title}`}
                  width={350}
                  height={100}
                />
              </div>
              <div className="p-4">
                <Link href={ movie.media_type === "movie" ? `/movie/${movie.id}` :`/serie/${movie.id}` }>
                  <p className="text-white text-lg font-semibold hover:underline">
                    {movie.title || movie.name}
                  </p>
                </Link>
                <p className="text-sm text-white mb-2">
                  {movie.release_date || movie.first_air_date}
                </p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
