import React from "react";
import { cleanup, render } from "@testing-library/react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props", () => {
    const component = create(<ProfileStatus status='it-camasutra' />);
    const instanse = component.getInstance();
    expect(instanse.state.status).toBe("it-camasutra");
  });

  test("after creation", () => {
    const component = create(<ProfileStatus status='it-camasutra' />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation", () => {
    const component = create(<ProfileStatus status='it-camasutra' />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-camasutra");
  });
});
