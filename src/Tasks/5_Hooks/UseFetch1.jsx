import { useState, useEffect } from "react";

const UseFetch1 = (url) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [isError, setIsError] = useState({ status: false, message: "" });

  useEffect(() => {
    (async () => {
      setIsError({ status: false, message: "" });
      try {
        let dataJson = await fetch(url);
        let result = await dataJson.json();
        setData(result);
        setIsError({ status: false, message: "" });
        setLoading(false);
        if (dataJson.status === 404) {
          throw new Error("Data not found");
        }
      } catch (Error) {
        setIsError({
          status: true,
          message: Error.message || "something went wrong",
        });
      }
    })();
  }, []);

  return { data, loading, isError };
};

export default UseFetch1;
