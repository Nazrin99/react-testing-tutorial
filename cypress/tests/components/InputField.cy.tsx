import React from "react";
import InputField from "../../../src/components/InputField";

describe("<InputField />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputField />);
  });
});
