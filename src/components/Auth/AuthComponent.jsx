import { useEffect } from "react";
import useAuthStore from "../StateStore/Store"; // Import the Zustand store
import fs from "fs"


const AuthComponent = () => {
  const { setData, setError } = useAuthStore(); // Use Zustand functions

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      method: "GET",
      headers: {
        "Authorization": "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {console.log(data)})
      .catch((error) => {console.log(error)});
  }, [setData, setError]);


  return null; // No UI needed in this component
};

export default AuthComponent;
