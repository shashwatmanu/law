import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Button } from '@mui/material';
import "./Card.css"


const CardComponent = ({img,rate,content}) => {
  return (
    <>
     <Card sx={{ width: '359px', marginLeft:'12px', marginRight:'36px', backgroundColor:'inherit', border:'2px solid rgb(43,43,43)', height:'377px', display:'flex', flexDirection:'column', justifyContent:'space-around', color:'white'}}>
      <CardMedia
        sx={{ height: '100px', width:'100px', marginLeft:'12px' }}
        image={require('..//..//Assets/Icon.png')}
        title="logo"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:'600', fontFamily:'inherit'}} gutterBottom variant="h5" component="div">
          {rate}% Success rate
        </Typography>
        <Typography variant="body2" sx={{opacity:'0.3'}}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <button className='button'>Read More</button>
      </CardActions>
    </Card>
    </>
  )
}
export default CardComponent;
