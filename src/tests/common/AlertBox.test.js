import { render } from '@testing-library/react';
import AlertBox from '../../components/common/AlertBox';

describe("AlertBox component", () => {
  it("should render AlertBox component correctly", () => {
    const { getByText } = render(<AlertBox title="AlertBox Title" type="warning" />);

    expect(getByText(/AlertBox Title/i)).toBeInTheDocument();
  });
});