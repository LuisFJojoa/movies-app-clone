import { Button, HeroSlide, OutlineButton } from '../components/'

import { category, movieType, tvType } from '../../api/tmdbApi';
import { MovieList } from "../components/";

export const HomePage = () => {

  return (
    <>
      <HeroSlide />
      <div className="container">

        <div className="section mb-3">
          <MovieList title="Upcoming Movies" url={`/movie/type/${movieType.upcoming}`} category={category.movie} type={movieType.upcoming} />
        </div>

        <div className="section mb-3">
          <MovieList title="Trending Movies" url={`/movie/type/${movieType.popular}`} category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <MovieList title="Top Rated Movies" url={`/movie/type/${movieType.top_rated}`} category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <MovieList title="New Episodes (Series)" url={`/tv/type/${movieType.on_the_air}`} category={category.tv} type={tvType.on_the_air} />
        </div>

        <div className="section mb-3">
          <MovieList title="Trending Movies" url={`/tv/type/${tvType.top_rated}`} category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <MovieList title="Top Rated Series" url={`/tv/type/${tvType.top_rated}`} category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

