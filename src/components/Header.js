import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleShowGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
                navigate("/");
			}
		});
        // unsubscribe when my component unmounts
        return () => {unsubscribe()}
	},[]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error'); 
        });
    }
    const handleGptSearchClick = () => {
        // Toggle GPT Search 
        dispatch(toggleShowGptSearch());
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    return (
        <div className="absolute z-10 w-full px-10 bg-gradient-to-b from-black flex justify-between items-center">
            <div className="w-52">
                <img src={NETFLIX_LOGO}
                    alt="logo"
                />
            </div>

            {
                user &&
                (
                <div className="flex items-center">
                    {
                    showGptSearch && (
                    <select className="p-2 m-2 bg-gray-800 text-white rounded-lg" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((language) => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
                    </select>
                    )
                    }
                    <button className="p-2 px-4 m-2 text-white font-bold bg-purple-600 rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Home": "SearchGPT"}</button>
                    <img className="w-10 rounded-lg" src={user?.photoURL} alt="usericon" />
                    <button className= "p-2 mx-2 text-white font-bold bg-red-600 rounded-lg" onClick={() => { handleSignOut() }}>
                        Sign Out
                    </button>
                </div>
                )
            }
            
        </div>
    )
}

export default Header;