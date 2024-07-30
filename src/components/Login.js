import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () =>  {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute -z-10">
                <img className="brightness-50" src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/e86a75da-ce78-4129-9e7d-c056f1c3363b/US-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_e46f05a7-c909-4aaf-9e3c-c832bbca606c_small.jpg" 
                    alt="login-background"
                />
            </div>
            <form className="p-16 bg-black bg-opacity-70 text-white  w-4/12 absolute z-20 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <h1 className="py-2 my-2 text-4xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-black bg-opacity-70 border-2 border-gray-500 rounded-md" />}
                <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-black bg-opacity-70 border-2 border-gray-500 rounded-md" />
                <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-black bg-opacity-70 border-2 border-gray-500 rounded-md" />
                <button className="p-4 my-2 bg-red-600 text-white text-lg font-bold rounded-md w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 my-2 text-lg cursor-pointer" onClick={() => {toggleSignInForm()}}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In"}</p>
            </form>
            
        </div>
    )
}

export default Login;