import { useContext } from 'react';

import { Button, HeroSlide, OutlineButton } from '../components/'
import { Link } from 'react-router-dom';

import { category, movieType, tvType } from '../../api/tmdbApi';
import { MovieList } from "../components/";
import { MovieContext } from '../context/MovieContext';

export const HomePage = () => {

  const {setHeaderTitle}  = useContext(MovieContext)

  const handleLinkClick = (title) => {
    setHeaderTitle(title)
    localStorage.setItem('headerTitle', title)
  };

  return (
    <>
      <HeroSlide />
      <div className="container">

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Upcoming Movies</h2>
            <Link onClick={() => handleLinkClick("Upcoming Movies")} to={`/movie/type/${movieType.upcoming}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link onClick={() => handleLinkClick("Trending Movies")} to={`/movie/type/${movieType.popular}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            {/* <Link to="/movie"> */}
            <Link onClick={() => handleLinkClick("Top Rated Movies")} to={`/movie/type/${movieType.top_rated}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>New Episodes (Series)</h2>
            <Link onClick={() => handleLinkClick("New Episodes (Series)")} to={`/tv/type/${tvType.on_the_air}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Series</h2>
            <Link onClick={() => handleLinkClick("Trending Series")} to={`/tv/type/${tvType.popular}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Series</h2>
            <Link onClick={() => handleLinkClick("Top Rated Series")} to={`/tv/type/${tvType.top_rated}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

