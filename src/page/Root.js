import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const authId = useSelector((state) => state.auth.authId);
  const navigate = useNavigate();

  useEffect(() => {
    if (authId) {
      navigate("/home");
      return;
    }
    navigate("/login");
  });

  return <></>;
};

export default Root;
