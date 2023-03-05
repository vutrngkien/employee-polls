import QuestionContainer from "./QuestionContainer";
import "../style/home.css";

const Home = () => {
  return (
    <div className="container">
      <QuestionContainer title={"Test"} />
      <QuestionContainer />
    </div>
  );
};

export default Home;
