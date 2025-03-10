import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
	const movies = useSelector((store) => store?.movies);
	return (
		<div className="bg-black -mt-10 md:mt-0">
			<div className="-mt-10 md:-mt-48 lg:-mt-80 relative z-10">	
				{movies?.nowPlayingMovies &&
				<MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
				}
				{movies?.popularMovies &&
				<MovieList title="Popular" movies={movies?.popularMovies} />
				}
				{movies?.topRatedMovies &&
				<MovieList title="Top Rated" movies={movies?.topRatedMovies} />
				}
				{movies?.upcomingMovies &&
				<MovieList title="Upcoming" movies={movies?.upcomingMovies} />
				}
			</div>
		</div>
	)
}

export default SecondaryContainer;