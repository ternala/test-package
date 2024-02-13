import React from 'react';
import { render } from '@testing-library/react';

import Autocomplete from './Autocomplete';
import TextField  from '../TextField';

describe('Select', () => {
  test('renders the Button component', () => {
    render(<Autocomplete options={[]} renderInput={(params) => (
      <TextField {...params} label="Select option"/>
    )}/>);
  });
});
