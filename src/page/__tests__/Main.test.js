import Main from "../Main";
import { render } from "@testing-library/react";
import store from "../../redux/store";
import { Provider } from "react-redux";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

it("main", () => {
  const view = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  expect(view).toBeTruthy();
});
