import { useState } from "react";
import Input from "./Input";

const CustomForm = ({ onSubmit, input1, input2, title, style }) => {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");

  const handleInput1Change = (e) => {
    const value = e.target.value.trim();
    setInput1Value(value);
  };

  const handleInput2Change = (e) => {
    const value = e.target.value.trim();
    setInput2Value(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const values = {
      value1: input1Value,
      value2: input2Value,
    };
    onSubmit(values);
  };

  return (
    <form style={style} onSubmit={handleSubmitForm}>
      <h1 className="form-header">{title}</h1>
      <Input {...input1} value={input1Value} onChange={handleInput1Change} />
      <Input {...input2} value={input2Value} onChange={handleInput2Change} />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
