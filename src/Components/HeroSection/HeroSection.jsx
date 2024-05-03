import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HeroImage from "..//..//Assets/Hero.png"
import "./Hero.css"


const HeroSection = () => {
  return (
    <>
    <Box sx={{display:'flex', backgroundColor:'#111111', color:'white', justifyContent:'space-around', height:'90vh'}}>
       <Box sx={{justifySelf:'center', width:'460px', alignSelf:'center'}}>
        <Stack> 
            <Typography variant='h3' sx={{fontFamily:'inherit',fontWeight:'500'}}>You don't have to</Typography>
            <Typography variant='h3' sx={{fontFamily:'inherit',fontWeight:'700'}}>Fight them Alone.</Typography>
            <Typography sx={{marginTop:'12px',opacity:'0.3', fontFamily:'inherit', fontWeight:'500px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor recusandae, possimus modi aperiam aliquid doloremque impedit nemo natus sint doloribus fugit consequatur deleniti omnis totam cum dolorem provident iusto. Odit?</Typography>
            <Box sx={{backgroundColor:'rgb(29,29,29)', borderRadius:'43px', width: '440px', height: '64px', marginTop: '68px'}}><input className='input'/><button className='button'>Let's talk</button></Box>
        </Stack>
        </Box>
        <Box sx={{height:'540px', width:'460px'}}>
<img src={HeroImage}/>
        </Box>
    </Box>
    </>
  )
}
export default HeroSection;
