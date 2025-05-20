import UseFetch1 from "./UseFetch1";

const UseFetchhook1 = () => {
  let { data, loading, isError } = UseFetch1(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <p>Loading..</p>;
  return (
    <>
      {!isError?.status ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <span className="text-danger">{isError.message}</span>
      )}
    </>
  );
};

export default UseFetchhook1;
