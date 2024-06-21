const Error = ({ error }) => {
    return (
      <div className="error-box">
        <h1>Error {error.status}</h1>
        <p>{error.msg}</p>
      </div>
    );
  };
  
  export default Error;