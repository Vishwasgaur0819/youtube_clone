import { signInWithPopup } from 'firebase/auth';
import React from 'react'

const LoginGmail = () => {

    const openPopup = () => {
        signInWithPopup(authUser, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                console.error("catch error", error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Sign in with Google</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={openPopup()}
                >
                    {/* <svg
            className="w-6 h-6 inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.75c0-.412-.085-.798-.236-1.151H12v2.17h5.703c-.23 1.26-.943 2.308-1.975 3.027v2.503h3.2a9.996 9.996 0 0 1-3.692 1.035c-2.31 0-4.28-1.247-5.352-3.093l-2.4 1.854c1.508 2.09 4.173 3.537 7.152 3.537a9.975 9.975 0 0 0 9.977-9.977z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 21V12l-5.375-3.938L11 4v7h9c1.1 0 2 .9 2 2s-.9 2-2 2h-9"
            />
          </svg> */}
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default LoginGmail