import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../../api/tmdbApi';
import {apiConfig} from '../../../api/apiConfig';

import {CastList, VideoList} from '.';

import {MovieList} from '../../components';

import './contentDetailPage.scss';

import notContentBg from '../../../assets/notContentBg.jpg'
import notContentCharacter from '../../../assets/notContentCharacter.jpg'
import { NotFoundPage } from '../NotFoundPage';

export const ContentDetailePage = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item 
                ? 
                (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
                :
                <div>
                    <div className="banner" style={{backgroundImage: `url(${notContentBg})`}}></div>
                        <div className="mb-3 movie-content">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${notContentCharacter})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    OOPS! {category === 'tv' ? 'SERIE' : 'MOVIE'} NOT FOUND.
                                </h1>
                                <p className="overview">Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
                            </div>
                        </div>
                        <div style={{height: '20vh'}}>
                        </div>
                </div>
            }
        </>
    );
}

