import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authId = localStorage.getItem("authId");
    if (authId) {
      navigate("/main/home");
      return;
    }
    navigate("/login");
  });

  return <></>;
};

export default Root;
