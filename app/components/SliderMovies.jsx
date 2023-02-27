"use client";
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function App({ title, movies, mediaType, query }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      <div className="flex ml-10 gap-2 py-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <Link key={query} href={`/all/${mediaType}/${query}/1`}>
        <span className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm  text-center py-2 px-2 dark:focus:ring-yellow-900">
          Explore all {">"}{" "}
        </span>
        </Link>
      </div>

      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item) => (
            <Link
              key={item.id}
              href={
                item.media_type === "movie" || mediaType === "movie"
                  ? `/movie/${item.id}`
                  : `/serie/${item.id}`
              }
            >
              <Image
                key={item.id}
                className=" inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={`${imagePath}${item.poster_path}`}
                alt="/"
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default App;
