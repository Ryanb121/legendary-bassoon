import { render, screen } from "@testing-library/react";
import Key from "../Key/Key";
import App from "./App";

describe("App", () => {
  test("renders App component and checks inner text", () => {
    render(<App />);
    expect(screen.getByText(/miniPiano/)).toBeInTheDocument();
  });
  test("renders Key component and checks inner text", () => {
    render(<Key />);
    expect(screen.getByText(/J/)).toBeInTheDocument();
  });
});
