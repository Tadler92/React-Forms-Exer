import {render, fireEvent, waitFor} from "@testing-library/react";
import TodoList from "./TodoList";
import { expect, it } from "vitest";


describe("TodoList Component", () => {
  it("renders without crashing", function () {
    render(<TodoList />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should add new todo", function () {
    const {queryByText, getByLabelText} = render(<TodoList />)
    const input = getByLabelText("Task Todo:");
    const btn = queryByText("Add Todo");
    expect(queryByText('Exercise')).not.toBeInTheDocument();
    expect(queryByText('X')).not.toBeInTheDocument();
  
    fireEvent.change(input, {target: {value: 'Exercise'}});
    fireEvent.click(btn);
    waitFor(() => expect(queryByText('Exercise')).toBeInTheDocument());
    waitFor(() => expect(queryByText('X')).toBeInTheDocument());
  });

  it("should remove todo", function () {
    const {queryByText, getByLabelText} = render(<TodoList />)
    const input = getByLabelText("Task Todo:");
    const btn = queryByText("Add Todo");
    let removeBtn = queryByText('X');

    expect(queryByText('homework')).not.toBeInTheDocument();
    expect(removeBtn).not.toBeInTheDocument();
  
    fireEvent.change(input, {target: {value: 'homework'}});
    fireEvent.click(btn);
    waitFor(() => expect(queryByText('homework')).toBeInTheDocument());
    waitFor(() => expect(queryByText('X')).toBeInTheDocument());

    removeBtn = queryByText('X');
    fireEvent.click(removeBtn);
    waitFor(() => expect(queryByText('homework')).not.toBeInTheDocument());
    waitFor(() => expect(removeBtn).not.toBeInTheDocument());
  });
});