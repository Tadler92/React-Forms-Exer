import {render, fireEvent, waitFor} from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
import { expect, it } from "vitest";


describe("NewTodoForm Component", () => {
  it("renders without crashing", function () {
    render(<NewTodoForm />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});