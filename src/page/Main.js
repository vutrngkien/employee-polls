import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { removeAuthId } from "../redux/reducer/authReducer";
import { getUsersSelector } from "../redux/selector/user";
import { fetchQuestions } from "../redux/thunk/question.thunk";
import { fetchUsers } from "../redux/thunk/user.thunk";
import "../style/main.css";

const subRoute = ["home", "leaderboard", "add"];
const Main = () => {
  const users = useSelector(getUsersSelector);
  const authId = useSelector((state) => state.auth.authId);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [authUser, setAuthUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeAuthId());
    navigate("/login");
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (!authId) {
      navigate("/login");
      return;
    }

    setAuthUser(users[authId]);
  }, [users]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="main-header">
          <div className="main-nav">
            {authId
              ? subRoute.map((el) => {
                  const isActive = currentPath.includes(el);
                  return (
                    <Link
                      key={el}
                      to={`/${el}`}
                      className={`main-nav-item ${isActive ? "active" : ""}`}
                    >
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                  );
                })
              : "Employee Polls"}
          </div>

          <div className="user">
            <div className="user-item">
              <img src={authUser?.avatarURL} alt="" />
              <span>{authUser?.name}</span>
            </div>
            <button
              style={{
                background: "none",
                color: "inherit",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleLogout}
              className="user-item"
            >
              {authId ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Main;
