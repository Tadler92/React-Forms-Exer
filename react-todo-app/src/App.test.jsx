import {render, fireEvent, waitFor} from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("Todo App Component", () => {
  it("renders without crashing", function () {
    render(<App />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});