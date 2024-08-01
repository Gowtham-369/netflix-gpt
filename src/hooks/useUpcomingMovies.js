import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
        const data = await fetch(url, API_OPTIONS);
        const jsonObj = await data.json();
        // console.log(jsonObj.results);
        dispatch(addUpcomingMovies(jsonObj.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;
