
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import {PageHeader} from '../components/PageHeader/PageHeader';

import {MovieGrid} from '../components/movieGrid/MovieGrid';
import { MovieContext } from '../context';

export const ContentCategoryPage = () => {

    const {header}  = useContext(MovieContext)
    const { category } = useParams();
    return (
        <>
            <PageHeader>
                {header.title}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}