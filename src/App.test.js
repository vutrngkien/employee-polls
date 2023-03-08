import { render } from "@testing-library/react";
import * as React from "react";
import App from "./App";

it("App render", () => {
  const view = render(<App />);
  expect(view).toBeTruthy();
});

it("App toMatchSnapshot", () => {
  const view = render(<App />);
  expect(view).toMatchSnapshot();
});
