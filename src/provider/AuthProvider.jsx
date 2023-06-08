import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUserWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email) {
        axios
          .post(`http://localhost:5000/jwt`, { email: currentUser?.email })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoader(false);
            
          });
      } else {
        localStorage.removeItem("access-token");
        setLoader(false)
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    loader,
    setLoader,
    createUserWithEmail,
    loginWithEmail,
    loginWithGoogle,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
