import React from 'react';
import { MOVIE_CARD_CDN_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
    return (
        <div>
            <div className="w-52 h-full p-1">
                <img className="w-full h-full" src={MOVIE_CARD_CDN_URL+movie.poster_path} alt="MOVIE CARD" />
            </div>
        </div>
    )
}

export default MovieCard;