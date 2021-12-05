import React, { useContext, useState } from 'react';
import firebase from 'firebase';

import firebaseConfig from "./firebase.config";

import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

import './login.css';
const app2 = firebase.initializeApp(firebaseConfig);
const Login = () => {
    const[isNewUser,setIsNewUser] = useState(false)    
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const[loggedInUser,setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const[user,setUser] = useState({
        name:"",
        isSignedIn:false,
        photoURL:"",
        password:"",
        email:"",
        error:"",
        successMessage:false,
        
      })
    const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => { 
        
        
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            
            const token = result.accessToken;
            // The signed-in user info.
            const {displayName,email} = result.user;
            const signedInUser = {name:displayName,email:email}
            setLoggedInUser(signedInUser)
            
            history.replace(from)
            storeAuthToken()
            console.log(signedInUser)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = firebase.GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        
    }
    const handleBlur = (event) =>{
       console.log(event.target.value)
       let isFieldValid = true;
       if (event.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        
      }
      if (event.target.name === 'password') {
        const isValidPassword = event.target.value.length> 8;
        const passwordNum = /\d{1}/.test(event.target.value)
        isFieldValid = isValidPassword && passwordNum;
        console.log(isFieldValid)
      
      }
      if (isFieldValid) {
        const updateUserInfo = {...user}
        updateUserInfo[event.target.name] = event.target.value;

        setUser(updateUserInfo)
       

      }
         
    }
    const handleSubmit = (event) =>{
       if (isNewUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        const specialUser = {email:user.email}
        setLoggedInUser(specialUser)
        history.replace(from)
     })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // ..
    });
       }
    //    if (!isNewUser && user.email && user.password) {
    //     firebase.auth().signInWithEmailAndPassword( user.email, user.password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       console.log(user)
    //       setLoggedInUser(user)
         
    //       history.replace(from)
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //     });
    //    }
 
    // }
    if (!isNewUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(result => {
          const {name,email} = result.user;
          console.log(name)
          const newUser = {name,email}
          setLoggedInUser(newUser)
          history.replace(from)
        })
    }
  }
    const storeAuthToken = ()=>{
     
       firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
         sessionStorage.setItem('token', idToken)
        // ...
      }).catch(function(error) {
        // Handle error
        console.log(error)
      });
    }
    console.log(loggedInUser)
    return (
        <div>
           <h1>Hi this is login</h1>
           <button style={{margin:"10px"}} onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>
           <div className="form">
            <input type="checkbox" name="checkbox" onChange={()=>{setIsNewUser(!isNewUser)}}    />
           {
             isNewUser && <input type="text" className="form-control" name="name" onBlur={handleBlur} placeholder="type your name"></input>
           }
           <input type="email" className="form-control" name="email" onBlur={handleBlur} placeholder="type your email" id="" />
           <input type="password" className="form-control" name="password" onBlur={handleBlur}  placeholder="type your password" id="" />
           <input type="button" value="submit" onClick={handleSubmit} className="btn btn-primary"/> 
           </div>
        </div>
    );
};

export default Login;