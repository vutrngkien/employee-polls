import { useNavigate } from "react-router-dom";
import CustomForm from "../components/CustomForm";
import "../style/login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmitForm = ({ value1, value2 }) => {
    console.log(value1, value2);
    navigate("/main/home");
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

  return (
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
    </div>
  );
};

export default Login;
