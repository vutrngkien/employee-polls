import "../style/pollDetail.css";

const PollDetail = () => {
  return (
    <div className="container">
      <div className="poll-info">
        <h1>Poll by author</h1>
        <img src="/avt3.jpg" alt="" />
      </div>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "30px" }}>
        Would You Rather
      </h1>
      <div className="poll-option">
        <div className="poll-option-item">
          <span>option 1</span>
          <button>Click</button>
        </div>
        <div className="poll-option-item">
          <span>option 1</span>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
};

export default PollDetail;
