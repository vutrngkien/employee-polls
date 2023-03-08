import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomForm from "../components/CustomForm";
import "../style/login.css";
import { setAuthId } from "../redux/reducer/authReducer";
import { getUsersSelector } from "../redux/selector/user";
import { fetchUsers } from "../redux/thunk/user.thunk";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const users = useSelector(getUsersSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitForm = ({ value1: username, value2: password }) => {
    const ids = Object.keys(users);
    if (!ids.includes(username) || users[username].password !== password) {
      setIsError(true);
      return;
    }
    setIsError(false);
    dispatch(setAuthId(username));

    navigate("/home");
  };

  const input1 = {
    label: "User",
    id: "username",
    name: "username",
    type: "text",
    placeholder: "username",
  };

  const input2 = {
    label: "Password",
    id: "password",
    name: "password",
    type: "password",
    placeholder: "password",
  };

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="main-header">
          <div className="main-nav">Employee Polls</div>

          <button
            style={{
              background: "none",
              color: "inherit",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              const input = document.getElementById("username");
              input.focus();
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">Employee Polls</h1>
          <img src="./CODEOWNERS.png" alt="img" />
        </div>
        <CustomForm
          title="Login"
          onSubmit={handleSubmitForm}
          input1={input1}
          input2={input2}
        />
        {isError && <p>username or password is incorrect!</p>}
      </div>
    </>
  );
};

export default Login;
