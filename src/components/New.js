import CustomForm from "./CustomForm";

const New = () => {
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

  const handleSubmitForm = (values) => {
    console.log(values);
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
