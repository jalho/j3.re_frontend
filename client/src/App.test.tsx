import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders work in progress text", () => {
  const { getByText } = render(<App />);
  const WIPViewText = getByText(/kesken/i);
  expect(WIPViewText).toBeInTheDocument();
});
