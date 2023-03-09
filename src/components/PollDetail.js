import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchQuestions } from "../redux/thunk/question.thunk";
import { fetchUsers } from "../redux/thunk/user.thunk";
import "../style/pollDetail.css";
import { _saveQuestionAnswer } from "../_DATA";

const PollDetail = () => {
  const [question, setQuestion] = useState({});
  const [author, setAuthor] = useState({});
  const [optionAnswer, setOptionAnswer] = useState("");

  const questions = useSelector((state) => state.question.questions);
  const users = useSelector((state) => state.user.users);
  const authId = useSelector((state) => state.auth.authId);
  const { question_id: questionId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const ques = questions[questionId];
    if (ques) {
      setQuestion(ques);
      setAuthor(users[ques.author]);

      if (ques.optionOne.votes.includes(authId)) {
        setOptionAnswer("optionOne");
      }

      if (ques.optionTwo.votes.includes(authId)) {
        setOptionAnswer("optionTwo");
      }
    } else {
      navigate("/not-found");
    }
  }, [questions, questionId, users, optionAnswer, authId, navigate]);

  const optOne = questions[questionId]?.optionOne.votes.length;
  const optTwo = questions[questionId]?.optionTwo.votes.length;
  const total = optOne + optTwo;

  const handleVoteBtnClick = async (option) => {
    if (optionAnswer) return;
    setOptionAnswer(option);
    const ans = {
      authedUser: authId,
      qid: questionId,
      answer: option,
    };

    await _saveQuestionAnswer(ans);
    dispatch(fetchQuestions());
    dispatch(fetchUsers());
  };

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
        <div
          className={`poll-option-item ${
            optionAnswer === "optionOne" && "select"
          } ${!!optionAnswer && "disable"}`}
        >
          <span>{question.optionOne?.text}</span>
          {!optionAnswer && (
            <button onClick={() => handleVoteBtnClick("optionOne")}>
              Click
            </button>
          )}
        </div>
        <div
          className={`poll-option-item ${
            optionAnswer === "optionTwo" && "select"
          } ${!!optionAnswer && "disable"}`}
        >
          <span>{question.optionTwo?.text}</span>
          {!optionAnswer && (
            <button onClick={() => handleVoteBtnClick("optionTwo")}>
              Click
            </button>
          )}
        </div>
      </div>

      {optionAnswer && total !== 0 && (
        <div>
          <p
            style={{ textAlign: "center" }}
          >{`${optOne}/${total}(${Number.parseFloat(
            (optOne / total) * 100
          ).toFixed(2)}%) users prefer option one`}</p>
          <p
            style={{ textAlign: "center" }}
          >{`${optTwo}/${total}(${Number.parseFloat(
            (optTwo / total) * 100
          ).toFixed(2)}%) users prefer option two`}</p>
        </div>
      )}
    </div>
  );
};

export default PollDetail;
