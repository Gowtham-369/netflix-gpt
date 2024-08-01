import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    return (
        <div>
            <div className="pt-[10%] flex justify-center">
                <form className="w-8/12 bg-black  grid grid-cols-12 rounded-md">
                    <input type="text" className="col-span-10 p-4 m-2 text-xl rounded-md" placeholder={lang[langKey].gptSearchPlaceHolder} />
                    <button className="p-4 m-2 text-xl col-span-2 bg-red-600 text-white rounded-md">
                        {lang[langKey].search}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar;