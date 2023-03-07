import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../redux/thunk/question.thunk";
import { _saveQuestion } from "../_DATA";
import CustomForm from "./CustomForm";

const New = () => {
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
    const auth = authId || localStorage.getItem("authId");

    const question = { optionOneText, optionTwoText, author: auth };
    await _saveQuestion(question);
    dispatch(fetchQuestions());
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
        input1={input1}
        input2={input2}
      />
    </div>
  );
};

export default New;
