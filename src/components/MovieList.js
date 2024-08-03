import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <div className="px-8 md:px-16 py-2 md:py-4">
                <h1 className="text-md md:text-3xl py-4 text-white">{title}</h1>
                {
                movies &&
                <div className="flex overflow-x-scroll">
                    {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
                }
            </div>
        </div>
    )
}

export default MovieList;