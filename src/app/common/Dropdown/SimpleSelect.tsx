 import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import { FormHelperText } from '@mui/material';
// import { useCommonStyles } from '../../styles/common';

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//     '& .MuiInputBase-input': {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #EBEEF3',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '1px solid #3466E5',
//         boxShadow: 'none',
//       },
//     },
//   }));
  

// type Options = {
//     value : string;
//     text  : string;
//   }

//   interface IDropdownVal{
//     text ?: string;
//     value ?: string;
//   }

// interface Props {
//     value ?: any;
//     onChange ?: any;
//     onChangeText ?: any;
//     validationKey ?: any;
//     label ?: string;
//     options ?: Array<Options>;
//     disabled?:boolean;
//     placeholder?: string;
//     searchType?:boolean;
//     outline ?: boolean;
//     id?:string;
//   }
  

// const BasicSelect: React.FC<Props> = (props) => {
//   const classes = useCommonStyles();
//   const { id, value, onChange, label, options, disabled, placeholder, validationKey } = props;
//   return (
//     <Box className=" w-full mt-4 font-dm_sans">
//         {
//             label &&
//             <p className='text-brand-extra-icon font-medium text-sm mb-1'>{label}</p>
//         }
//       <FormControl fullWidth error={validationKey?true:false}>
//         <Select
//           id={id||'mui__select'}
//           value={value}
//           label="Age"
//           onChange={onChange}
//           disabled={disabled}
//           placeholder={placeholder}
//           variant="outlined"
//           sx={{
//             '& .MuiSelect-select':{
//               padding:'8px 26px 9px 12px',
//               fontSize: '14px'
//             },
//           }}
//           input={<BootstrapInput/>}
//         >
//             {
//                 options.map((opt)=>
//                 <MenuItem value={opt.value}>{opt.text}</MenuItem>
//                 )
//             }
//         </Select>
//         {
//           validationKey &&
//           <FormHelperText className={classes.ml0}>{validationKey}</FormHelperText>
//         }
//       </FormControl>
//     </Box>
//   );
// }

// export default BasicSelect
