import React, { Children, createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase-config';


const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    //add sign in method
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    // add login method
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInwithGoogle=(provider)=>{
       return signInWithPopup(auth,provider);
    }
    const authInfo={
        user,
        createUser,
        login,
        signInwithGoogle
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;