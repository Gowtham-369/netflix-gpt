import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store) => store.movies.upComingMovies);

    const getUpcomingMovies = async () => {
        const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
        const data = await fetch(url, API_OPTIONS);
        const jsonObj = await data.json();
        // console.log(jsonObj.results);
        dispatch(addUpcomingMovies(jsonObj.results));
    };

    useEffect(() => {
        !upComingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;
