import { Link } from 'react-router-dom';

import {Button} from '../';

import { category } from '../../../api/tmdbApi';
import {apiConfig} from '../../../api/apiConfig';

import './movieCard.scss';

export const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" loading="lazy" style={{backgroundImage:  `url( ${ (bg) && bg })`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3 className='content-card'>{item.title || item.name}</h3>
        </Link>
    );
}
