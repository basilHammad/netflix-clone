import { useState, useEffect, useContext } from "react";
import firebaseContext from "../context/firebaseContext/firebaseContext";

const useContent = (target) => {
  const [content, setContent] = useState([]);

  const firebase = useContext(firebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((res) => {
        const allContent = res.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { [target]: content };
};

export default useContent;
