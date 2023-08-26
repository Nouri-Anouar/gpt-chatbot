import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadUsers().catch((error) => {
      console.error("Error loading users:", error);
    });
  }, [url]);

  return data;
};

export default useFetch;
