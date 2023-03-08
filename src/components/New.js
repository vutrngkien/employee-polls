import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../redux/thunk/question.thunk";
import { fetchUsers } from "../redux/thunk/user.thunk";
import { _saveQuestion } from "../_DATA";
import CustomForm from "./CustomForm";

const New = () => {
  const [errMess, setErrMess] = useState("");
  const navigate = useNavigate();
  const authId = useSelector((state) => state.auth.authId);

  const dispatch = useDispatch();

  const input1 = {
    label: "First Option",
    id: "optionOne",
    name: "optionOne",
    type: "text",
    placeholder: "Option One",
  };

  const input2 = {
    label: "Second Option",
    id: "Option Two",
    name: "Option Two",
    type: "text",
    placeholder: "Option Two",
  };

  const handleSubmitForm = async ({
    value1: optionOneText,
    value2: optionTwoText,
  }) => {
    setErrMess("");

    if (!optionOneText || !optionTwoText) {
      setErrMess("Two field is required!");
      return;
    }

    const question = { optionOneText, optionTwoText, author: authId };
    await _saveQuestion(question);
    dispatch(fetchQuestions());
    dispatch(fetchUsers());
    navigate("/home");
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginTop: "60px",
          marginBottom: "16px",
        }}
      >
        Would You Rather
      </h1>
      <CustomForm
        title="Create Your Own Poll"
        onSubmit={handleSubmitForm}
        isClearInput
        input1={input1}
        input2={input2}
      />
      {errMess && <p>{errMess}</p>}
    </div>
  );
};

export default New;
