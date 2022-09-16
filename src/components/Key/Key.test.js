import { fireEvent, render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Key", () => {
  test("renders Key component and checks button(key) `c4` exists", () => {
    render(<Key />);
    const button = screen.getByRole("button", { name: "piano-key-c4" });
    expect(button).toBeInTheDocument();
  });
  test("when clicked, the button triggers event", async () => {
    render(<Key />);
    const button = screen.getByRole("button", { name: "piano-key-c4" });
    fireEvent.click(button);
    expect(button).not.toBeEmptyDOMElement();
  });
});
