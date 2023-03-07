import QuestionItem from "./QuestionItem";

const QuestionContainer = ({ title, questions }) => {
  return (
    <div className="question-container">
      <div className="container-header">
        <h1>{title}</h1>
      </div>

      <div className="list-question-item">
        {questions.length ? (
          questions.map((ques, i) => <QuestionItem key={i} question={ques} />)
        ) : (
          <p>empty</p>
        )}
      </div>
    </div>
  );
};

export default QuestionContainer;
