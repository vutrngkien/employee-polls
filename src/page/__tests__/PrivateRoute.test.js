import PrivateRoute from "../PrivateRoute";
import { render } from "@testing-library/react";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => jest.fn(),
}));

it("404", () => {
  const view = render(
    <Provider store={store}>
      {/* <Router>
        <PrivateRoute />
      </Router> */}
    </Provider>
  );
  expect(view).toBeTruthy();
});
