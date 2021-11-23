import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { initializeApp } from '@firebase/app';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const[loggedInUser,setLoggedInUser] = useContext(userContext)
    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    const app = initializeApp(firebaseConfig);
    const handleGoogleSignIn = () => { 
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const {displayName,email} = result.user;
            const signedInUser = {name:displayName,email:email}
            setLoggedInUser(signedInUser)
            history.replace(from)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        
    }
    return (
        <div>
           <h1>Hi this is login</h1>
           <button style={{margin:"10px"}} onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>
        </div>
    );
};

export default Login;