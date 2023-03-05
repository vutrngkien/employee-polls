import { useNavigate } from "react-router-dom";

const QuestionItem = () => {
  const navigate = useNavigate();

  const handleShowPoll = () => {
    navigate("/main/poll/123");
  };

  return (
    <div className="question-item">
      <div className="question-item-head">
        <h2 className="question-item-author">author</h2>
        <h2 className="question-item-time">time</h2>
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
