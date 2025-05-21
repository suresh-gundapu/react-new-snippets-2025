import UseForm from "./UseForm";

const UseLoginForm = () => {
  const { values, handleChange, resetValues } = UseForm({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log("geting values", values);
    //api calls
    resetValues();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Name:</span>{" "}
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <br></br>
        <span>Email:</span>{" "}
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default UseLoginForm;
