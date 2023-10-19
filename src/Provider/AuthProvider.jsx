import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [reload, setReload] = useState(true);

    const createUser = (email, password) => {
        setReload(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setReload(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setReload(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User changed', currentUser);
            setUser(currentUser);
            setReload(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        reload,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;