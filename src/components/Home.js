import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import "../style/home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [voted, setVoted] = useState([]);
  const [notVotedYet, setNotVotedYet] = useState([]);
  const questions = useSelector((state) => state.question.questions);
  const authId = useSelector((state) => state.auth.authId);

  useEffect(() => {
    if (questions.length === 0) return;
    const userAuthId = authId || localStorage.getItem("authId");
    const ids = Object.keys(questions);

    const votedQ = ids.map((id) => {
      const question = questions[id];
      if (
        question.optionOne.votes.includes(userAuthId) ||
        question.optionTwo.votes.includes(userAuthId)
      ) {
        return question;
      }
    });

    const notVoted = ids.map((id) => {
      const question = questions[id];
      if (
        !question.optionOne.votes.includes(userAuthId) &&
        !question.optionTwo.votes.includes(userAuthId)
      ) {
        return question;
      }
    });

    setVoted(votedQ.filter((item) => item));
    setNotVotedYet(notVoted.filter((item) => item));
  }, [questions]);

  return (
    <div className="container">
      <QuestionContainer title="New Questions" questions={notVotedYet} />
      <QuestionContainer title="Done" questions={voted} />
    </div>
  );
};

export default Home;
