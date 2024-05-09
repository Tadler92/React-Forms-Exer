import {render, fireEvent, waitFor} from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import { expect, it } from "vitest";


describe("NewBoxForm Component", () => {
  it("renders without crashing", function () {
    render(<NewBoxForm />);
  });
  
  
  it("matches snapshot", function () {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});