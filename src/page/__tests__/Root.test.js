import Root from "../Root";
import { render } from "@testing-library/react";
import store from "../../redux/store";
import { Provider } from "react-redux";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

it("404", () => {
  const view = render(
    <Provider store={store}>
      <Root />
    </Provider>
  );
  expect(view).toBeTruthy();
});
