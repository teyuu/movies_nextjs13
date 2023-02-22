import Pagination from "./components/Pagination";
import Movies from "./components/Movie";

export default async function Home() {

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular/?api_key=${"4d48849058823cd2c6d4c39c3dfbcf4a"}&page=${1}`
  );
  const res = await data.json();

  return (
    <main>
      <Pagination params={1} />
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
