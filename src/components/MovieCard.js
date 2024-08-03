import React from 'react';
import { MOVIE_CARD_CDN_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
    if(!movie?.poster_path) return null;
    return (
        <div>
            <div className="w-32 h-full md:w-52 p-1 ">
                <img className="w-full h-full" src={MOVIE_CARD_CDN_URL+movie.poster_path} alt="MOVIE CARD" />
            </div>
        </div>
    )
}

export default MovieCard;