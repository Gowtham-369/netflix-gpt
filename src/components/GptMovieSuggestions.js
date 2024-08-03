import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
	const { movieNames, movieResults } = useSelector((store) => store.gpt);
	if (!movieNames) return null;

	return (
		<div className="py-8 my-8 bg-black bg-opacity-70 text-white">
			{movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
		</div>
	)
}

export default GptMovieSuggestions;