import renderWithProviders, { fireEvent } from "../../../../../utils/test-utils";
import SendSMS from "../../../../../components/features/Blaster/SMS/SendSMS";

describe("SendSMS component", () => {
  it("should render Send SMS step 1 component correctly", () => {
    const { getByText } = renderWithProviders(<SendSMS />);

    expect(getByText(/Send an SMS Blast/i)).toBeInTheDocument();
  });

  it("should cancel send sms blast on cancel button click", () => {
    const { getByText, getByTestId } = renderWithProviders(<SendSMS />);

    fireEvent.click(getByTestId("sendSMS-cancel-btn"));

    expect(getByText(/Send an SMS Blast/i)).toBeInTheDocument();
  });

  it("should proceed to step 2 review sms blast", () => {
    const { getByTestId } = renderWithProviders(<SendSMS />);

    fireEvent.click(getByTestId("sendSMS-next-btn"));
  });
});