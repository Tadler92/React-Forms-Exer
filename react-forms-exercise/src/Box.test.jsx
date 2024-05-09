import {render, fireEvent, waitFor} from "@testing-library/react";
import Box from "./Box";
import { expect, it } from "vitest";


describe("Box Component", () => {
  it("renders without crashing", function () {
    render(<Box />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});