import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/components/Pagination";

export default async function page({ params }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const { classification,mediatype, page  } = params;
 
  const data =
    classification === "trending"
      ? await fetch(
          `https://api.themoviedb.org/3/${classification}/all/day?api_key=${
            process.env.API_KEY
          }&page=${page}`
        )
      : await fetch(
          `https://api.themoviedb.org/3/${mediatype}/${classification}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
        );
  const res = await data.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Search Results for "{classification}"
      </h1>
      <div className="flex justify-center">
        <Pagination params={page} mediatype={mediatype} classification={classification}/>
      </div>
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
                <Link
                  href={
                    movie.media_type === "movie"
                      ? `/movie/${movie.id}`
                      : `/serie/${movie.id}`
                  }
                >
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
