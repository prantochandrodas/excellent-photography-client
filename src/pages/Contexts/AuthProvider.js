import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase-config';


const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    //add sign in method
    const createUser=(email,password)=>{
        setLoading(false);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    // add login method
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    // user set
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[]);

    //logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const signInwithGoogle=(provider)=>{
        setLoading(true);
       return signInWithPopup(auth,provider);
    }
    const authInfo={
        user,
        createUser,
        login,
        signInwithGoogle,
        logOut,
        loading
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