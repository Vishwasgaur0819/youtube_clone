import React, { useRef, useState } from 'react';
import Header from './Header';
// import { checkValidateData } from '../utills/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utills/firebase';
import { useDispatch } from 'react-redux';
import { checkValidateData } from '../utills/validate';

// import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
    }

    const toggleSignForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {

        // validate the form data 
        let e = email?.current?.value;
        let p = password?.current?.value;
        let n = name?.current?.value;
        let errorMessage = checkValidateData(e, p)
        setErrorMessage(errorMessage);
        if (errorMessage) return;
        if (!isSignInForm) {
            //signup login

            createUserWithEmailAndPassword(auth, e, p)
                .then((userCredential) => {
                    let user = userCredential.user;
                    updateProfile(user, {
                        displayName: n, photoURL: "https://example.com/jane-q-user/profile.jpg",
                    }).then(() => {
                        const { uid, email, displayName, photoUrl } = user;
                        // dispatch(addUser({ uid, email, displayName: n, photoURL: "https://example.com/jane-q-user/profile.jpg" }))
                        // navigate('/browse');
                    }).catch((error) => {
                        // alert(error)
                        // An error occurred
                        // ...
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });

        } else {
            //sign in logic

            signInWithEmailAndPassword(auth, e, p)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("sign in user", user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });

        }
    }

    return (
        <div className="relative">
            {/* <Header /> */}
            <div className="m-auto relative">
                {/* <img
                    className="h-full w-full shadow-lg"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="coverimg"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center">
                    <div className="w-1/4 p-10 border border-black bg-black rounded-md bg-opacity-70 text-white h-max mt-32">
                        <form className="" onSubmit={submitForm} >
                            <p className="font-bold text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</p>
                            {!isSignInForm &&
                                <input
                                    ref={name}
                                    type="text"
                                    placeholder="Full Name"
                                    className="mt-5 w-full h-12 px-3 border border-gray-400 bg-transparent rounded-md text-white"
                                />}
                            <input
                                ref={email}
                                type="text"
                                placeholder="Email address"
                                className="w-full h-12 px-3 border mt-5 border-gray-400 bg-transparent rounded-md text-white"
                                // onChange={(e) => handleSetFormData('email', e)}
                                value={email?.current?.value}
                            />
                            <input
                                ref={password}
                                type="text"
                                placeholder="Password"
                                className="mt-5 w-full h-12 px-3 border border-gray-400 bg-transparent rounded-md text-white"
                            />
                            {errorMessage && <p className=" cursor-pointer font-medium text-sm mt-5 text-red-600">{errorMessage}</p>}
                            <button type="submit" onClick={handleButtonClick} className="mt-6 w-full h-12 bg-red-700 text-white rounded-md">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                            <p onClick={toggleSignForm} className=" cursor-pointer font-medium text-sm  mt-5">{isSignInForm ? 'Sign Up Now' : 'Already a user!. Sign In'}</p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;