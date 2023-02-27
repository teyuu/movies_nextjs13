"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

function App({ movies }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const filteredMovies = movies.map(
    ({ id, title, backdrop_path, overview, name, media_type }) => ({
      id,
      title,
      backdrop_path,
      overview,
      name,
      media_type
    })
  );

  const slides = filteredMovies.slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentIndex + slides.length - 1) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="max-w-[1600px] sm:h-[780px] w-full m-auto py-10 px-4 group relative">
      <div
        style={{
          backgroundImage: `url(${
            imagePath + slides[currentIndex].backdrop_path
          })`,
        }}
        className="w-full h-full rounded-md bg-center bg-cover duration-500"
      >
        <div className="flex flex-col justify-evenly p-14 md:w-[50%] h-full gap-5 overflow-auto">
          <h1 className="text-4xl sm:text-6xl font-bold">
            {slides[currentIndex].title || slides[currentIndex].name}
          </h1>
          <p className="font-medium text-lg ">
            {slides[currentIndex].overview}
          </p>
          <Link
            href={
              slides[currentIndex].media_type === "movie"
                ? `/movie/${slides[currentIndex].id}`
                : `/serie/${slides[currentIndex].id}`
            }
          >
            <button className="text-neutral-900 font-bold rounded-md bg-stone-200 w-[40%] h-12">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 group-hover:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={handlePrevSlide} size={30} />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 group-hover:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={handleNextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            className={`text-2xl cursor-pointer ${
              currentIndex === index ? "text-white" : "text-red-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
