import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

 

describe("ProfileStatus", () => {
  test("my test", () => {
    const component = create(<ProfileStatus status="qwe" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("qwe");
  });
});