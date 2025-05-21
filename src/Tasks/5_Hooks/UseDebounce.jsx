import { useEffect, useState } from "react";
const UseDebounce = (value, delay = 500) => {
  let [debouncedValue, setdebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default UseDebounce;
