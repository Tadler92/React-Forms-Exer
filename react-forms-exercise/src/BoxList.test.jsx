import {render, fireEvent, waitFor} from "@testing-library/react";
import BoxList from "./BoxList";
import { expect, it } from "vitest";


describe("BoxList Component", () => {
  it("renders without crashing", function () {
    render(<BoxList />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should add new item", function () {
    const {queryByText, getByLabelText} = render(<BoxList />)
    const bgColorinput = getByLabelText("Background Color:");
    const btn = queryByText("Add Box");
    expect(queryByText('X')).not.toBeInTheDocument();
  
    fireEvent.change(bgColorinput, {target: {value: 'Orange'}});
    console.log(bgColorinput);
    console.log(btn);
    fireEvent.click(btn);
    waitFor(() => expect(queryByText('X')).toBeInTheDocument());
  })
});