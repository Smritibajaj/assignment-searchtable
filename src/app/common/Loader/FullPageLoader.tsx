import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function FullPageLoader() {

  return (
    <div>
      <Backdrop
        sx={{ color: '#286EF1', zIndex: (theme) => theme.zIndex.drawer + 1,  }}
        open={true}
        invisible={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
