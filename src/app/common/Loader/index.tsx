import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props{
  loadingText ?: string;
}

const Loader: React.FC<Props> = (props) => {
  return (
    <>
    <Box className="flex flex-col justify-center items-center h-screen">
      <CircularProgress className='text-brand-primary-blue'/>
      {/* <p className='text-brand-primary-blue pt-2'>{loadingText || 'Loading...'}</p> */}
    </Box>
    </>
  );
};

export default Loader;
