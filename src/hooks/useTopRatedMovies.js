import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const getTopRatedMovies = async () => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
        const data = await fetch(url, API_OPTIONS);
        const jsonObj = await data.json();
        // console.log(jsonObj.results);
        dispatch(addTopRatedMovies(jsonObj.results));
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;
