import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

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
                <div className="flex">
                    <img className="w-10 rounded-lg" src={user?.photoURL} alt="usericon" />
                    <button className="text-white font-bold p-2 mx-2 bg-red-600 rounded-lg" onClick={() => { handleSignOut() }}>
                        Sign Out
                    </button>
                </div>
                )
            }
            
        </div>
    )
}

export default Header;