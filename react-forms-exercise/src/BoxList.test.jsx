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

  it("should add new box", function () {
    const {queryByText, getByLabelText} = render(<BoxList />)
    const bgColorinput = getByLabelText("Background Color:");
    const addBtn = queryByText("Add Box");
    const removeBtn = queryByText('X');
    expect(removeBtn).not.toBeInTheDocument();
  
    fireEvent.change(bgColorinput, {target: {value: 'orange'}});
    fireEvent.click(addBtn);
    waitFor(() => expect(removeBtn).toBeInTheDocument());
  });

  it("should remove box", function () {
    const {queryByText, getByLabelText} = render(<BoxList />)
    const bgColorinput = getByLabelText("Background Color:");
    const btn = queryByText("Add Box");
    let removeBtn = queryByText('X');

    expect(removeBtn).not.toBeInTheDocument();
  
    fireEvent.change(bgColorinput, {target: {value: 'maroon'}});
    fireEvent.click(btn);
    waitFor(() => expect(queryByText('X')).toBeInTheDocument());

    
    waitFor(() => fireEvent.click(queryByText('X')));
    waitFor(() => expect(removeBtn).not.toBeInTheDocument());
  });
});