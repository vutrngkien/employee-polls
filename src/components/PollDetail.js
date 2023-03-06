import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/pollDetail.css";

const PollDetail = () => {
  const [question, setQuestion] = useState({});
  const [author, setAuthor] = useState({});
  const questions = useSelector((state) => state.question.questions);
  const users = useSelector((state) => state.user.users);
  const { question_id: questionId } = useParams();

  useEffect(() => {
    const ques = questions[questionId];
    if (ques) {
      setQuestion(ques);
      setAuthor(users[ques.author]);
    }
  }, [questions, questionId, users]);

  return (
    <div className="container">
      <div className="poll-info">
        <h1>Poll by {author.name}</h1>
        <img src={author.avatarURL} alt="" />
      </div>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "30px" }}>
        Would You Rather
      </h1>
      <div className="poll-option">
        <div className="poll-option-item">
          <span>{question.optionOne?.text}</span>
          <button>Click</button>
        </div>
        <div className="poll-option-item">
          <span>{question.optionTwo?.text}</span>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
};

export default PollDetail;
