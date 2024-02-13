import React from "react";
import { render } from "@testing-library/react";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'

import ToggleButtonGroup from "./ToggleButtonGroup";

describe("ToggleButtonGroup", () => {
  test("renders the ToggleButtonGroup component", () => {
    render(
        <ToggleButtonGroup>
          <AddIcon/>
        </ToggleButtonGroup>
    );
  });
});
