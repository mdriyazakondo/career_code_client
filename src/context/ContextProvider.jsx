import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(true);

  // create user email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // social login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axios
          .post("http://localhost:3000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => console.log("JWT:", res.data))
          .catch((err) => console.error("JWT Error:", err.message));
      }
      // else {
      //   // ✅ ইউজার না থাকলে cookie ক্লিয়ার করে দাও
      //   axios.post(
      //     "http://localhost:3000/logout",
      //     {},
      //     { withCredentials: true }
      //   );
      // }
    });

    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    loading,
    setLoading,
    createUser,
    signInUser,
    userSignOut,
    users,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
