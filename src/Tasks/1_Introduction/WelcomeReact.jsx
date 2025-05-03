let WelcomeReact = () => {
  let handleClcik = () => {
    alert("");
  };
  return (
    <>
      <div className="container card m-auto">
        <button
          className="btn btn-success"
          onClick={() => {
            handleClcik();
          }}
        >
          Get Welcome Message
        </button>
      </div>
    </>
  );
};
export default WelcomeReact;
