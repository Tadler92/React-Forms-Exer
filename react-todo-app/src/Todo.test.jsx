import {render, fireEvent, waitFor} from "@testing-library/react";
import Todo from "./Todo";
import { expect, it } from "vitest";


describe("Todo Component", () => {
  it("renders without crashing", function () {
    render(<Todo />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });
});