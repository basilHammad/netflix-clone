import { useState, useEffect, useContext } from "react";
import firebaseContext from "../context/firebaseContext/firebaseContext";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const firebase = useContext(firebaseContext);

  useEffect(() => {
    let mounted = true;
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        if (mounted) {
          setUser(authUser);
        }
      } else {
        localStorage.removeItem("authUser");
        if (mounted) {
          setUser(null);
        }
      }
    });

    return () => (mounted = false);
  }, []);

  return { user };
};

export default useAuthListener;
