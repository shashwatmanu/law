import React from 'react'
import { Box, Stack, Typography, cardActionAreaClasses } from '@mui/material'
import "./Intro.css"
import customData from "..//..//Data/RatingMockData.json"
import CardComponent from '../Card/CardComponent'

const Introduction = () => {
    console.log(customData);
  return (
    <>
    <Box sx={{backgroundColor:'rgb(29,29,29)', display: 'flex', paddingTop:'36px', justifyContent:'space-around', color:'white', paddingBottom:'36px'}}>
<Box sx={{alignSelf:'center', maxWidth:'50%'}}><Typography variant='h4' sx={{fontFamily:'inherit', fontWeight:'600'}}>Let's Introduce Ourself</Typography></Box>
<Box><div class="vl"></div></Box>
<Box sx={{maxWidth:'30%', alignSelf:'center'}}><Stack><Typography variant='h5' sx={{marginBottom:'3px', fontFamily:'inherit', fontWeight:'600px'}}>Criminal Lawyer</Typography><Typography variant='p' sx={{opacity:'30%', fontFamily:'inherit', fontWeight:'500px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aperiam exercitationem nulla et consequuntur. Ex atque, modi adipisci natus delectus distinctio reprehenderit maxime obcaecati tenetur. Impedit magni assumenda nihil blanditiis.</Typography></Stack></Box>
    </Box>

    <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'rgb(29,29,29)', color:'white', paddingTop:'170px'}}> 
        <Stack>
        <Typography variant='h4' sx={{fontFamily:'inherit', fontWeight:'600', alignSelf:'center', marginBottom:'97px'}}>Why choose us?</Typography>
        <Box sx={{display:'flex'}}>
        {customData.map((data)=><Box><CardComponent img={data.img} rate={data.rate} content={data.content}/></Box>)}
        </Box>
        </Stack>
    </Box>

    </>
  )
}
export default Introduction;
