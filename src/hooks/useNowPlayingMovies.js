import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);


    const getNowPlayingMovies = async () => {
        const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
        const data = await fetch(url, API_OPTIONS);
        const jsonObj = await data.json();
        // console.log(jsonObj.results);
        dispatch(addNowPlayingMovies(jsonObj.results));
    };

    useEffect(() => {
        if(!nowPlayingMovies){
            getNowPlayingMovies();
        }
    }, []);
}

export default useNowPlayingMovies;
