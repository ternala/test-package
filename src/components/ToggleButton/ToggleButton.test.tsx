import React from "react";
import { render } from "@testing-library/react";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'

import ToggleButton from "./ToggleButton";

describe("ToggleButton", () => {
  test("renders the ToggleButton component", () => {
    render(
        <ToggleButton>
          <AddIcon/>
        </ToggleButton>
    );
  });
});
