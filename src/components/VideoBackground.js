import React from "react";
import { useSelector } from "react-redux";
import useMovieTailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

	const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
	useMovieTailer(movieId);

	return (
		<div className="w-screen">
			<iframe className="w-full h-full object-cover aspect-video"
				// width="560"
				// height="315"
				src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
			>
			</iframe>
		</div>
  	);
};

export default VideoBackground;
