import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error'); 
        });
    }
    return (
        <div className="absolute z-10 w-full p-1 bg-gradient-to-b from-black flex justify-between items-center">
            <div className="w-52">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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