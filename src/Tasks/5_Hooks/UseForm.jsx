import { useState } from "react";
const UseForm = (intialValues) => {
  const [values, setValues] = useState(intialValues);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let resetValues = () => setValues(intialValues);

  return { values, handleChange, resetValues };
};

export default UseForm;
