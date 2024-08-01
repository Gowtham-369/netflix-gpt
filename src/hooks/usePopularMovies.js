import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const url = "https://api.themoviedb.org/3/movie/popular?page=1";
        const data = await fetch(url, API_OPTIONS);
        const jsonObj = await data.json();
        // console.log(jsonObj.results);
        dispatch(addPopularMovies(jsonObj.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;
