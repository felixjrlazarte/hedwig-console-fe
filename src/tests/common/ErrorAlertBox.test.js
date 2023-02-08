import { render } from "@testing-library/react";
import ErrorAlertBox from "../../components/common/ErrorAlertBox";

describe("ErrorAlertBox component", () => {
  it("should render ErrorAlertBox component correctly", () => {
    const { getByText } = render(<ErrorAlertBox title="ErrorAlertBox title"/>);

    expect(getByText(/ErrorAlertBox title/i)).toBeInTheDocument();
  });
});