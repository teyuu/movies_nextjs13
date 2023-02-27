import MainSlider from "./components/MainSlider";
import SliderMovies from "./components/SliderMovies";
import { getTopRatedMovies, getTrendingAll, getPopularMovies, getTopRatedSeries,getPopularSeries } from "@/fetching";

export default async function Home() {

  const trending =  await getTrendingAll()
  const top_rated_res = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()
  const topRatedSeries = await getTopRatedSeries()
  const popularSeries = await getPopularSeries()

  const categories = [
    {
      title:'Trending',
      data:trending,
      mediaType: "trends",
      query: 'trending'
    },
    {
      title:'Top rated',
      data:top_rated_res,
      mediaType: "movie",
      query: 'top_rated'
    },
    {
      title:'Popular',
      data: popularMovies,
      mediaType: "movie",
      query: 'popular'

    },
    {
      title:'Top rated series',
      data: topRatedSeries,
      mediaType: "tv",
      query: 'top_rated'
    },
    {
      title:'Popular series',
      data: popularSeries,
      mediaType: "tv",
      query: 'popular'
    }


  ]

  return (
    <main>
      <div>
        {/* Slider principal */}
        <MainSlider movies={trending} />
        <div className="flex flex-col gap-8">
          {categories.map(({title, data, mediaType, query}, index)=>{
           return( <SliderMovies key={index} title={title} movies={data} mediaType={mediaType} query={query}/>)
          })}
        </div>
      </div>
    </main>
  );
}
