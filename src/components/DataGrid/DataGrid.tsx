import React, {useState} from 'react';
import {DataGridPro, GridValidRowModel, useGridApiRef} from '@mui/x-data-grid-pro';
import {styled, useMediaQuery} from "@mui/material";
import { DataGridProProps } from '@mui/x-data-grid-pro/models/dataGridProProps';

const StyledDataGrid = styled(DataGridPro)(({theme}) => ({
  '&': {
    // borderRadius: '16px!important',
    background: 'linear-gradient(0deg, #24272B 0.35%, #3D4148 192.77%) !important',
    // background: '#3D4148',
    fontSize: '12px',
    '@media screen and (max-width: 1024px)': {
      fontSize: '12px'
    },
// boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.50), -4px -2px 16px 0px rgba(195, 200, 205, 0.08)',
    color: '#fff',

    /* Firefox */
    scrollbarWidth: 'thin',
    scrollbarColor: '#8EDBFF #1C1E22',

    /* Chrome, Edge and Safari */
    '::-webkit-scrollbar': {
      height: '16px',
      width: '16px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '100%',
      // backgroundColor: '#1C1E22',
      background: 'linear-gradient(359deg, #2C333A 2.5%, #1C1E22 90.19%)',
      boxShadow: '-1px 2px 2px 0px rgba(15, 18, 22, 0.60), 1px 1px 8px 0px rgba(255, 255, 255, 0.00) inset',
      backdropFilter: 'blur(14px)'
    },

    '::-webkit-scrollbar-track:hover': {
      backgroundColor: '#1C1E22',
    },

    '::-webkit-scrollbar-track:active': {
      backgroundColor: '#1C1E22',
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: '20px',
      // backgroundColor: '#8EDBFF',
      background: 'linear-gradient(92deg, #00AEFF -13.2%, #8EDBFF 145.97%)',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: 'linear-gradient(92deg, #00AEFF -13.2%, #8EDBFF 145.97%)',
    },

    '::-webkit-scrollbar-thumb:active': {
      background: 'linear-gradient(92deg, #00AEFF -13.2%, #8EDBFF 145.97%)',
    },

  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none'
  },
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {display: 'none' },
  '& .MuiDataGrid-columnHeaders': {
    background: 'linear-gradient(144deg, #32383E -69.07%, #17191C 122.22%)',
    boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.50), -4px -2px 16px 0px rgba(195, 200, 205, 0.08)',
    color: '#fff',
    borderWidth: 0,
    height: '100% !important',
    '@media screen and (max-width: 1024px)': {
      minHeight: 'initial !important',
      maxHeight: 'initial !important',
    },
    '.MuiDataGrid-withBorderColor': {
      outline: 'none !important',
      pointerEvents: 'none'
    }
  },
  '& .MuiDataGrid-pinnedColumnHeaders': {
    '& .MuiDataGrid-columnHeader': {
      '&TitleContainer': {
        left: 'initial !important',
        marginLeft: 'initial !important',
        '@media screen and (max-width: 1024px)': {
          transform: 'initial !important',
          top: 'initial',
          position: 'static',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBlock: '10px'
        }
      },
      '&DraggableContainer': {
        '@media screen and (max-width: 1024px)': {
          paddingBottom: 0,
          transform: 'translateY(0%) rotate(0deg)',
          transformOrigin: 'top left',
          position: 'static',
          paddingLeft: 'initial !important',
          height: '100% !important',
          '&:before': {
            content: '""',
            border: 'none',
            width: 'initial'
          }
        }
      },
    },
    '& .css-yrdy0g-MuiDataGrid-columnHeaderRow': {
    },
  },
  '& .MuiDataGrid-columnHeader': {
    '&--sorted': {
      color: '#00AEFF',
      '& .MuiDataGrid-sortIcon': {
        fill: '#00AEFF'
      }
    },
    '&DraggableContainer': {
      '@media screen and (max-width: 1024px)': {
        // paddingBottom: '100%',
        width: '100%',
        /* width: 250px; */
        paddingLeft: '23%',
        paddingBottom: '70.72%',
        /* transform: translateY(100%); */
        transformOrigin: 'top left',
        position: 'absolute',
        /* width: 400px; */
        top: '100%',
        left: 0,
        transform: 'rotate(-45deg)',
        height: 'initial !important',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100vw',
          transform: 'translateX(-50%)',
          // background: '#f0f',
          borderTop: '1px solid #363839'
        }
      }
    },
    '@media screen and (max-width: 1024px)': {
      display: 'grid',
      height: '102px !important',
    },
    position: 'relative',
    },
    '.MuiDataGrid-columnHeadersInner': {
      '@media screen and (max-width: 1024px)': {
        height: 'initial !important',
      },
      width: '100%',
      display: 'flex',
    },
    '.MuiDataGrid-virtualScrollerContent css-1kwdphh-MuiDataGrid-virtualScrollerContent': {
      display: 'flex'
    },
    '.MuiDataGrid-virtualScrollerRenderZone': {
      display: 'flex'
    },
    '.css-yrdy0g-MuiDataGrid-columnHeaderRow': {
      height: '100% !important',
      display: 'flex',
    },
    '& .MuiDataGrid-row': {
      borderWidth: 0,
      display: 'flex',
      '&:nth-child(even)': {
        background: '#26292E',
      },
      '&:nth-child(odd)': {
        background: '#31343A',
      }
    },
    '& .MuiDataGrid-cell': {
      borderWidth: 0,
      padding: '0 clamp(4px, 5wv, 10px)',
      '@media screen and (max-width: 1024px)': {
        borderLeft: '2px solid #363839',
        whiteSpace: 'normal !important'
      },
    },
    '& .MuiDataGrid-pinnedColumns': {
      boxShadow: '0px 0px 10px 0px #00000026',
      '& .MuiDataGrid-cell': {
        '@media screen and (max-width: 1024px)': {
          borderLeft: 'initial'
        },
      },
    },
    '& .MuiDataGrid-iconButtonContainer': {
      visibility: 'visible !important',
      width: 'auto !important'
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      '&Container': {
        pointerEvents: 'all',
        overflow: 'initial',
        width: '100%',
        '@media screen and (max-width: 1024px)': {
          transform: 'translateY(-50%)',
          position: 'absolute',
          top: '50%',
          left: '17px',
          marginLeft: '26%',
        },
        '&Content': {
          overflow: 'initial'
        }
      },
      lineHeight: 1,
      overflow: 'initial',
      textOverflow: 'initial',
    },
    '& .MuiDataGrid-sortIcon': {
      opacity: '1 !important',
      fill: '#ffffff'
    },
    '.MuiDataGrid-pinnedColumnHeaders': {
      background: '#24282C',
      height: '100%'
    },
    '.MuiDataGrid-columnHeaderDraggableContainer': {
      width: '100%'
    }
// '.MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted)  {'
}));

export interface IProps<R extends GridValidRowModel = any> extends DataGridProProps<R>, React.RefAttributes<HTMLDivElement> {}

const CustomDataGrid = <R extends GridValidRowModel = any>(props: IProps<R>) => {
  const apiRef = useGridApiRef();
  const [maxComputedWidth, setMaxComputedWidth] = useState(0);

  const handler = () => {
    // console.log(apiRef.current.getAllColumns())
    const columns = apiRef.current.getAllColumns();
    let maxComputedWidth = 0;

    columns.forEach(column => {
      if (column.computedWidth && column.computedWidth > maxComputedWidth) {
        maxComputedWidth = column.computedWidth;
      }
    });

    setMaxComputedWidth(maxComputedWidth);
    // console.log('maxComputedWidth', maxComputedWidth)
  }

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const columnVisibilityModel = React.useMemo(() => {
    return {
      'add': true,
      'name': true,
      'team': true,
      'opp': true,
      'venue': true,
      'spread': true,
      'prop': true,
      'line': true,
      'user-line': isLargeScreen,
      'proj': true,
      'win': true,
      'pick': isLargeScreen,
    };
  }, [isLargeScreen]);

  return (
      <StyledDataGrid
          // classes={{
          //   icon: ((orderBy === column.id) ? classes.activeSortIcon :
          //       classes.inactiveSortIcon )
          // }}
          // initialState={{ pinnedColumns: { left: ['add', 'name'] }}}
          sx={{
            '& .MuiDataGrid-columnHeader': {
              '@media screen and (max-width: 1024px)': {
                display: 'grid',
                height: `${maxComputedWidth}px !important`,
              }
            }
          }}
          columnVisibilityModel={columnVisibilityModel}
          onStateChange={handler}
          apiRef={apiRef}
          {...props}
      />
  )
}

export default CustomDataGrid;
