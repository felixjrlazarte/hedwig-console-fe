import renderWithProviders from "../../utils/test-utils";
import Header from "../../components/common/Header";

const preloadedState = {
  preloadedState: {
    user: {
      details: { firstname: "Juan", lastname: "Dela Cruz" }
    }
  }
};

describe("Header component", () => {
  it("should render Header component correctly", () => {
    const { getByText } = renderWithProviders(<Header />, preloadedState);

    expect(getByText(/Juan Dela Cruz/i)).toBeInTheDocument();
  });
});