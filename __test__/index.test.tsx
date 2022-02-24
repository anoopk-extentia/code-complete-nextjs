import { render } from "@testing-library/react";
import Home from "pages";

describe("Home Page", () => {
  it("should render home page", () => {
    const { getByText } = render(<Home />);
    const text = getByText("Hello world");
    expect(text).toBeTruthy();
  });
});
