import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        margin: "auto",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "180px", fontWeight: "600" }}>404</h1>
      <h2 style={{ fontSize: "50px" }}>Page not found</h2>
      <button
        onClick={handleBackClick}
        style={{ width: "150px", height: "30px", marginTop: "20px" }}
      >
        Go home
      </button>
    </div>
  );
};

export default NotFound;
