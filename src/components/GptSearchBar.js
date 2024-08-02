import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openAiClient from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMoviesResults } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieInTMDB = async (movie) => {
        const url = "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1";

        const data = await fetch(url, API_OPTIONS);
        const jsonObj = await data.json();

        return jsonObj.results;
    };
    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie Results
        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + 
        ". Out of all the movies, give me only the names of five movies that are comma separated like the example result given ahead. Example Result : Salaar, Sholay, God Father, Avengers, Hanuman";
        const gptResults = await openAiClient.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptResults.choices){
            // TODO: Error Handling
        }
        // console.log(gptResults.choices);  
        // "Aha Naa Pellanta, Yamaleela, Alluda Mazaaka, Tata Manavadu, Mayabazar"
        const gptMovies = gptResults?.choices[0]?.message?.content.split(", ")
        // ['Aha Naa Pellanta', 'Yamaleela', 'Alluda Mazaaka', 'Tata Manavadu', 'Mayabazar']
        // console.log(gptMovies);
        // Get Movies Information from TMDB API
        const promiseArray = gptMovies.map((movie) => searchMovieInTMDB(movie.trim()));
        // [Promise, Promise, Promise, Promise, Promise]
        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);
        dispatch(addGptMoviesResults({movieNames: gptMovies, movieResults: tmdbResults}));
    };

    return (
        <div>
            <div className="pt-[10%] flex justify-center">
                <form className="w-8/12 bg-black  grid grid-cols-12 rounded-md" onSubmit={(e) => e.preventDefault()}>
                    <input ref={searchText} type="text" className="col-span-10 p-4 m-2 text-xl rounded-md" placeholder={lang[langKey].gptSearchPlaceHolder} />
                    <button className="p-4 m-2 text-xl col-span-2 bg-red-600 text-white rounded-md" onClick={handleGptSearchClick}>
                        {lang[langKey].search}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar;