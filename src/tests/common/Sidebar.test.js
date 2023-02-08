import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import { store } from '../../slices/store';
import Sidebar from '../../components/common/Sidebar';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Sidebar />} />
      <Route path="/dashboard" element={<Sidebar isToggle={true} />} />
    </Route>
  ));

const SidebarComponent = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

describe("Sidebar component", () => {
  it("should render Sidebar component correctly", () => {
    const { getByText } = render(<SidebarComponent />);

    expect(getByText(/HEDWIG/i)).toBeInTheDocument();
    expect(getByText(/Dashboard/i)).toBeInTheDocument();
    expect(getByText(/Blaster/i)).toBeInTheDocument();
  });

  it("should expand item with submenu items", () => {
    const { getByText } = render(<SidebarComponent />);

    fireEvent.click(getByText("Blaster"));

    expect(getByText(/SMS/i)).toBeInTheDocument();
  });

  it("should toggle Sidebar component on toggle button click and render item with popover", () => {
    const { getByText } = render(<SidebarComponent />);

    const dashboardLink = getByText(/Dashboard/i);
    const blasterLink = getByText(/Blaster/i);

    fireEvent.click(getByText("Dashboard"));

    expect(dashboardLink).not.toBeInTheDocument();
    expect(blasterLink).not.toBeInTheDocument();
  });
});