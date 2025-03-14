import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if(!movies) return;

	const mainMovie = movies[0];
	// console.log(mainMovie);
	const {title, overview, id} = mainMovie;
	return (
		<div className="pt-[22%] bg-black md:pt-0">
			<VideoTitle title={title} overview={overview} />
			<VideoBackground movieId={id}/>	
		</div>
	)
}

export default MainContainer;