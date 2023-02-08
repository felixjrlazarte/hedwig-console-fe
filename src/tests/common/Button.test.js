import { render } from "@testing-library/react";
import Button from "../../components/common/Button";

describe("Button component", () => {
  it("should render Button component correctly", () => {
    const { getByText } = render(<Button>Submit</Button>);

    expect(getByText(/Submit/i)).toBeInTheDocument();
  });
});