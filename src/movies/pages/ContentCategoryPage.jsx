
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {PageHeader} from '../components/PageHeader/PageHeader';

import {MovieGrid} from '../components/movieGrid/MovieGrid';
import { MovieContext } from '../context';

export const ContentCategoryPage = () => {

    const {headerTitle}  = useContext(MovieContext)
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category])
    
    return (
        <>
            <PageHeader>
                {headerTitle}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}