import NotFound from "../NotFound";
import { render, fireEvent, screen } from "@testing-library/react";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

it("404", () => {
  const view = render(<NotFound />);
  expect(view).toBeTruthy();
});

it("404 go home", () => {
  const view = render(<NotFound />);
  fireEvent.click(screen.getByText(/Go home/i));
  expect(view).toBeTruthy();
});
