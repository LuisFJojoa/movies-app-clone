import { Button, HeroSlide, OutlineButton } from '../components/'

import { category, movieType, tvType } from '../../api/tmdbApi';
import { MovieList } from "../components/";

const options = [
  {
    id: 1,
    category: category.movie,
    type: movieType.upcoming,
    title: "Upcoming Movies",
    url: `/movie/type/${movieType.upcoming}`
  },
  {
    id: 2,
    category: category.movie,
    type: movieType.popular,
    title: "Trending Movies",
    url: `/movie/type/${movieType.popular}`
  },
  {
    id: 3,
    category: category.movie,
    type: movieType.top_rated,
    title: "Top Rated Movies",
    url: `/movie/type/${movieType.top_rated}`
  },
  {
    id: 4,
    category: category.tv,
    type: tvType.on_the_air,
    title: "New Episodes (Series)",
    url: `/tv/type/${tvType.on_the_air}`
  },
  {
    id: 5,
    category: category.tv,
    type: tvType.popular,
    title: "Trending Series",
    url: `/tv/type/${tvType.popular}`
  },
  {
    id: 6,
    category: category.tv,
    type: tvType.top_rated,
    title: "Top Rated Series",
    url: `/tv/type/${tvType.top_rated}`
  },
]
export const HomePage = () => {

  return (
    <>
      <HeroSlide />
      <div className="container">
        {
          options.map((option) =>

            <div key={option.id} className="section mb-3">
              <MovieList title={option.title} url={option.url} category={option.category} type={option.type} />
            </div>
            )
        }
      </div>
    </>
  )
}

