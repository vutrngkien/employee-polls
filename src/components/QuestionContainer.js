import QuestionItem from "./QuestionItem";

const QuestionContainer = ({ title }) => {
  return (
    <div className="question-container">
      <div className="container-header">
        <h1>{title}</h1>
      </div>

      <div className="list-question-item">
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </div>
    </div>
  );
};

export default QuestionContainer;
