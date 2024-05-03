import React from 'react'
import Box from '@mui/material/Box';
import LogoIcon from '../Logo/Logo';
import { Typography, Button } from '@mui/material';


 const Navbar = () => {
  return (
    <Box sx={{display:'flex', backgroundColor: 'rgba(17, 17, 17, 1)', padding:'24px', justifyContent:'space-around'}}>
        <Box sx={{marginLeft:'9px', alignSelf:'center', display:'flex'}}><LogoIcon/><Box sx={{color:'white',marginLeft:'3px'}}> <Typography variant='h6'  sx={{fontFamily:'inherit', fontWeight:'600'}}>IGSTUDIO</Typography></Box></Box>
       
       <Box sx={{justifySelf:'center', color:'white'}}>
       <Button variant='primary' sx={{fontFamily:'inherit', fontWeight:'600'}}>Home</Button>
       <Button variant='primary' sx={{fontFamily:'inherit', fontWeight:'600'}}>Attorneys</Button>
       <Button variant='primary' sx={{fontFamily:'inherit', fontWeight:'600'}}>Practice Areas</Button>
       <Button variant='primary' sx={{fontFamily:'inherit', fontWeight:'600'}}>About us</Button>
       </Box>
       <Box sx={{justifySelf:'flex-end', color:'white'}}><Button sx={{color:'white',border: '1px solid white', paddingLeft:'20px',paddingRight:'20px', fontFamily:'inherit', fontWeight:'600'}} variant='outlined'>Contact us</Button></Box>
    </Box>
  )
}
export default Navbar;
