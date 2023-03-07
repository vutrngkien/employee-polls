import { useSelector } from "react-redux";
import { getUsersSelector } from "../redux/selector/user";
import "../style/leaderboard.css";

const Leaderboard = () => {
  const users = useSelector(getUsersSelector);

  const sortUsers = Object.keys(users).sort((a, b) => {
    const userA = users[a];
    const userB = users[b];
    const answersA = Object.keys(userA.answers);

    const sumA = answersA.length + userA.questions.length;

    const answersB = Object.keys(userB.answers);

    const sumB = answersB.length + userB.questions.length;

    return sumB - sumA;
  });

  return (
    <div className="container">
      <table className="leaderboard">
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map((u) => {
            const user = users[u];
            return (
              <tr key={u}>
                <td>
                  <div className="user-info">
                    <img src={user.avatarURL} alt="" />
                    <div className="user-detail">
                      <span className="name">{user.name}</span>
                      <span className="username">{user.id}</span>
                    </div>
                  </div>
                </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
