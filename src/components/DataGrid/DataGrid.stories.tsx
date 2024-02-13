import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
// import { useMediaQuery } from "@mui/material";
import DataGrid from './DataGrid';
import IconButton from '../IconButton';
import imageTeam from '../../assets/teams/team-1.png';
import NumberField from '../NumberField';
import CustomToggleButtonGroup from '../ToggleButtonGroup';
import CustomToggleButton from '../ToggleButton';
// import {GridColDef} from "@mui/x-data-grid-pro";

const Template: StoryFn<typeof DataGrid> = (args) => <DataGrid {...args} />;

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid
};
export default meta;

type Story = StoryObj<typeof DataGrid>;

export const SimpleDataGrid: Story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleDataGrid.args = {
  disableRowSelectionOnClick: true,
  hideFooterPagination: true,
  hideFooterSelectedRowCount: true,
  autosizeOptions: {
    columns: ['add', 'pick', 'team', 'opp', 'venue', 'line', 'prop'],
    includeOutliers: true,
    includeHeaders: true
  },
  autosizeOnMount: true,
  initialState: {
    pinnedColumns: { left: ['add', 'name'] }
  },
  columns: [
    {
      headerName: 'Add',
      field: 'add',
      renderCell: () => <IconButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconButton>,
      sortable: false,
      disableColumnMenu: true,
      // width: 36,
      editable: false,
    },
    {
      headerName: 'Name',
      field: 'name',
      // maxWidth: 174,
      minWidth: 100,
      // width: '100%',
      // maxWidth: 174,
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      // editable: false,
    },
    {
      headerName: 'Team',
      field: 'team',
      renderCell: () => <img src={imageTeam} alt="Image Team"/>,
      disableColumnMenu: true,
      // maxWidth: 35,
      // minWidth: 35,
      editable: false,
      minWidth: 50,
      maxWidth: 80,
      align: 'center',
      flex: 1,
      // sortable: false,
    },
    {
      headerName: 'Opp.',
      field: 'opp',
      renderCell: () => <img src={imageTeam} alt="Image Team"/>,
      disableColumnMenu: true,
      // maxWidth: 35,
      // minWidth: 35,
      editable: false,
      minWidth: 50,
      maxWidth: 80,
      align: 'center',
      flex: 1,
      // sortable: false,
    },
    {
      headerName: 'Venue O/U.',
      field: 'venue',
      disableColumnMenu: true,
      // minWidth: 61,
      flex: 1,
      editable: false,
      // align: 'center',
      // sortable: false,
    },
    {
      headerName: 'Spread',
      field: 'spread',
      disableColumnMenu: true,
      // maxWidth: 63,
      minWidth: 63,
      flex: 1,
      editable: false
    },
    {
      headerName: 'Prop',
      field: 'prop',
      renderCell: () => 'Reb',
      disableColumnMenu: true,
      editable: false,
      minWidth: 65,
      flex: 0.5
    },
    {
      headerName: 'Line',
      field: 'line',
      renderCell: () => '3',
      disableColumnMenu: true,
      // minWidth: 44,
      // type: 'number',
      align: 'center',
      editable: false
    },
    {
      headerName: 'User Line',
      field: 'user-line',
      renderCell: () => <NumberField/>,
      disableColumnMenu: true,
      width: 120,
      editable: false,
      hideable: false
    },
    {
      headerName: 'Proj',
      field: 'proj',
      width: 55,
      disableColumnMenu: true,
      editable: false
    },
    {
      headerName: 'Win %',
      field: 'win',
      width: 80,
      disableColumnMenu: true,
      editable: false
    },
    {
      headerName: 'Pick',
      field: 'pick',
      renderCell: () => (
        <CustomToggleButtonGroup>
          <CustomToggleButton value={'O'} selected sx={{p: 0}}>
            <span>O</span>
          </CustomToggleButton>
          <CustomToggleButton value={'L'} sx={{p: 0}}>
            <span>L</span>
          </CustomToggleButton>
        </CustomToggleButtonGroup>
      ),
      disableColumnMenu: true,
      editable: false,
      // width: 'auto'
      // maxWidth: 68,
      // minWidth: 68,
    },
  ],
  rows: [
    {
      id: 1,
      name: 'John Doe',
      win: '18.63%',
      venue: 'R',
      spread: '-'
    },
    {
      id: 2,
      name: 'John Cena',
      venue: 'R',
      win: '18.63%',
      spread: '-'
    },
    {
      id: 3,
      name: 'Leo Messi',
      venue: 'H',
      win: '18.63%',
      spread: '-'
    },
    {
      id: 4,
      name: 'Cristiano Ronaldo',
      venue: 'R',
      win: '18.63%',
      spread: '-'
    },
    {
      id: 5,
      name: 'Barack Obama',
      venue: 'H',
      win: '18.63%',
      spread: '-'
    },
    {
      id: 6,
      name: 'Brad Pitt',
      venue: 'H',
      win: '18.63%',
      spread: '-'
    }
  ]
};
