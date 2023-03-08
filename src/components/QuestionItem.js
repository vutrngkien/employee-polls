import { useNavigate } from "react-router-dom";

const QuestionItem = ({ question }) => {
  const navigate = useNavigate();

  const handleShowPoll = () => {
    navigate(`/questions/${question.id}`);
  };

  const date = new Date(question.timestamp);

  return (
    <div className="question-item">
      <div className="question-item-head">
        <h2 className="question-item-author">{question.author}</h2>
        <h2 className="question-item-time">{date.toISOString()}</h2>
      </div>
      <div className="question-item-bot">
        <button onClick={handleShowPoll} className="question-item-btn">
          Show
        </button>
      </div>
    </div>
  );
};

export default QuestionItem;
