import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import "./Intro.css"

const Introduction = () => {
  return (
    <>
    <Box sx={{backgroundColor:'rgb(29,29,29)', display: 'flex', paddingTop:'36px', justifyContent:'space-around', color:'white', paddingBottom:'36px'}}>
<Box sx={{alignSelf:'center', maxWidth:'50%'}}><Typography variant='h4' sx={{fontFamily:'inherit', fontWeight:'600'}}>Let's Introduce Ourself</Typography></Box>
<Box><div class="vl"></div></Box>
<Box sx={{maxWidth:'30%', alignSelf:'center'}}><Stack><Typography variant='h5' sx={{marginBottom:'3px', fontFamily:'inherit', fontWeight:'600px'}}>Criminal Lawyer</Typography><Typography variant='p' sx={{opacity:'30%', fontFamily:'inherit', fontWeight:'500px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aperiam exercitationem nulla et consequuntur. Ex atque, modi adipisci natus delectus distinctio reprehenderit maxime obcaecati tenetur. Impedit magni assumenda nihil blanditiis.</Typography></Stack></Box>
    </Box>

    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'rgb(29,29,29)', color:'white'}}> 
        <Stack>
        <Typography variant='h4' sx={{fontFamily:'inherit', fontWeight:'600'}}>Why choose us?</Typography>

        </Stack>
    </Box>

    </>
  )
}
export default Introduction;
