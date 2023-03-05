import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../style/main.css";

const subRoute = ["home", "leaderboard", "new"];

const Main = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div>
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
            <img src="/avt2.jpg" alt="" />
            <span>name</span>
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
      <Outlet />
    </div>
  );
};

export default Main;
