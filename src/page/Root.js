import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../redux/thunk/user.thunk";

const Root = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {});

  useEffect(() => {
    dispatch(fetchUsers());
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
