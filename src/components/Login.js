import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_ICON } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessageFormValidation, setErrorMessageFormValidation] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(isSignInForm, name?.current?.value, email?.current?.value, password?.current?.value);

        setErrorMessageFormValidation(message);

        // Authentication
        if (message) return;

        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log(user);
                    updateProfile(user, {
                        displayName: name?.current?.value, 
                        photoURL: USER_ICON
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
				        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    }).catch((error) => {
                        setErrorMessageFormValidation(error.message);
                    });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessageFormValidation(errorCode + "-" + errorMessage);
                });
        }
        else {
            // Sign In
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessageFormValidation(errorCode + "-" + errorMessage);
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute -z-10">
                <img className="brightness-50" src={BG_URL}
                    alt="login-background"
                />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className="p-16 bg-black bg-opacity-70 text-white  w-4/12 absolute z-20 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <h1 className="py-2 my-2 text-4xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-black bg-opacity-70 border-2 border-gray-500 rounded-md" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-black bg-opacity-70 border-2 border-gray-500 rounded-md" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-black bg-opacity-70 border-2 border-gray-500 rounded-md" />
                <p className="text-red-600">{errorMessageFormValidation}</p>
                <button onClick={() => { handleButtonClick() }} className="p-4 my-2 bg-red-600 text-white text-lg font-bold rounded-md w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 my-2 text-lg cursor-pointer" onClick={() => { toggleSignInForm() }}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In"}</p>
            </form>

        </div>
    )
}

export default Login;