import React from "react";
import { render } from "@testing-library/react";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'

import IconButton from "./IconButton";

describe("IconButton", () => {
  test("renders the IconButton component", () => {
    render(
        <IconButton>
          <AddIcon/>
        </IconButton>
    );
  });
});
