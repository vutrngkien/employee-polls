import "../style/leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="container">
      <table className="leaderboard">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="user-info">
                <img src="/avt3.jpg" alt="" />
                <div className="user-detail">
                  <span className="name">name</span>
                  <span className="username">username</span>
                </div>
              </div>
            </td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>
              <div className="user-info">
                <img src="/avt3.jpg" alt="" />
                <div className="user-detail">
                  <span className="name">name</span>
                  <span className="username">username</span>
                </div>
              </div>
            </td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
