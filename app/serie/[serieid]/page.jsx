import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { serieid } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${serieid}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const res = await data.json();

  const releaseDate = new Date(res.first_air_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[80%] flex flex-col items-center justify-center gap-10 bg-gray-400 bg-opacity-20 rounded-2xl p-8  m-auto my-5">
      <h1 className="text-3xl font-bold underline">{res.name}</h1>
      <Image
        className="rounded-md"
        src={imagePath + res.backdrop_path}
        alt={`${res.title}`}
        width={850}
        height={0}
      />
      <div className="flex sm:justify-between sm:flex-row w-[80%] flex-col gap-5">
        <h2 className="text-lg">Date: {releaseDate}</h2>
        <h2>Number of seasons: {res.number_of_seasons}</h2>
        <span>
          Status:{" "}
          <span
            className={`inline-block py-2 px-4 rounded text-sm font-bold ${
              res.status === "Released" ? "bg-green-600" : "bg-gray-500"
            }`}
          >
            {res.status}
          </span>
        </span>
      </div>
      <p className="text-lg">{res.overview}</p>
    </div>
  );
}
