import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import "../style/home.css";
import { useSelector } from "react-redux";

const filterAndSortQues = (questions) => {
  return questions
    .filter((item) => item)
    .sort((a, b) => b.timestamp - a.timestamp);
};

const Home = () => {
  const [voted, setVoted] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [notVotedYet, setNotVotedYet] = useState([]);
  const questions = useSelector((state) => state.question.questions);
  const authId = useSelector((state) => state.auth.authId);

  useEffect(() => {
    if (questions.length === 0) return;
    const ids = Object.keys(questions);

    const votedQ = ids.map((id) => {
      const question = questions[id];
      if (
        question.optionOne.votes.includes(authId) ||
        question.optionTwo.votes.includes(authId)
      ) {
        return question;
      }
    });

    const notVoted = ids.map((id) => {
      const question = questions[id];
      if (
        !question.optionOne.votes.includes(authId) &&
        !question.optionTwo.votes.includes(authId)
      ) {
        return question;
      }
    });

    setVoted(filterAndSortQues(votedQ));
    setNotVotedYet(filterAndSortQues(notVoted));
  }, [questions, authId]);

  return (
    <div className="container">
      <button
        style={{
          marginTop: "20px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => setIsAnswered(!isAnswered)}
      >
        {!isAnswered ? "Answered" : "Unanswered"}
      </button>
      {isAnswered ? (
        <QuestionContainer title="Answered" questions={voted} />
      ) : (
        <QuestionContainer title="Unanswered" questions={notVotedYet} />
      )}
    </div>
  );
};

export default Home;
