import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { removeAuthId } from "../redux/reducer/authReducer";
import "../style/main.css";

const subRoute = ["home", "leaderboard", "new"];

const Main = () => {
  const users = useSelector((state) => state.user.users);
  const authId = useSelector((state) => state.auth.authId);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authId");
    dispatch(removeAuthId());
    navigate("/login");
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  const userLogin = useMemo(() => {
    const authStorageId = localStorage.getItem("authId") || "";
    const id = authId || authStorageId;
    if (!id) {
      navigate("/login");
      return;
    }

    return users[id];
  }, [users, authId]);

  return (
    <>
      <div className="header-container">
        <div className="main-header">
          <div className="main-nav">
            {subRoute.map((el) => {
              const isActive = currentPath.includes(el);
              return (
                <Link
                  key={el}
                  to={`/main/${el}`}
                  className={`main-nav-item ${isActive ? "active" : ""}`}
                >
                  {el[0].toUpperCase() + el.slice(1)}
                </Link>
              );
            })}
          </div>

          <div className="user">
            <div className="user-item">
              <img src={userLogin.avatarURL} alt="" />
              <span>{userLogin.name}</span>
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
              Logout
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Main;
