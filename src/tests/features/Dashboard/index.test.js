import renderWithProviders from "../../../utils/test-utils";
import Dashboard from "../../../components/features/Dashboard";

const customConfig = {
  preloadedState: {
    user: {
      details: { firstname: "Juan" }
    }
  }
};

describe("Dashboard component", () => {
  it("should render Dashboard component correctly", () => {
    const { getByText } = renderWithProviders(<Dashboard />, customConfig);

    expect(getByText(/Welcome back, Juan/i)).toBeInTheDocument();
  });
});