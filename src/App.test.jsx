import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />); // request to render the App component
  const headingElement = screen.getByText(/learn react/i); // Find element by display text (regular expression - flexible search)
  expect(headingElement).toBeInTheDocument(); // expect the element to be in the document
});
