import { useState, useEffect, useContext } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../../components'

import PropTypes from 'prop-types';
import tmdbApi, { category } from '../../../api/tmdbApi';

import { MovieContext } from '../../context';
import { MovieCard } from '../movieCard/MovieCard';

import './movieList.scss';

export const MovieList = props => {

    const [items, setItems] = useState([]);

    const { setHeaderTitle } = useContext(MovieContext)

    const handleLinkClick = (title) => {
        setHeaderTitle(title)
        localStorage.setItem('headerTitle', title)
    };

    useEffect(() => {
        const getList = async () => {

            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <>
            {
                items.length > 0 && <>
                    <div className="section__header mb-2">
                        <h2>{props.title}</h2>
                        <Link onClick={() => handleLinkClick(props.title)} to={props.url}>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div><div className="movie-list">
                        <Swiper
                            grabCursor={true}
                            spaceBetween={10}
                            slidesPerView={'auto'}
                        >
                            {items?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <MovieCard item={item} category={props.category} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div></>
            }

        </>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}