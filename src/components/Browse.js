import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
                Main Movie Container Component
                    - Video Trailer Background
                    - Movie Title
                Secondary Container Component
                    - Movies List * n
                        - Cards * n
             */}
        </div>
    )
}

export default Browse;