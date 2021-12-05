import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import './room.css'
import{Link} from 'react-router-dom'
const Room = (props) => {
  const{title,description,imgUrl,bedType} = props.data;
  
  

  return (
    
//        <div className="col-md-4 room ">
//       <div className="card" style={{width: "18rem"}}>
//   <img src={imgUrl} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//    
//   </div>
// </div>
//     </div>
        
<div className="col-md-4 room"> 
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href={`book/${bedType}`} className="btn btn-primary">Book</a>
      </CardActions>
    </Card>
</div>

  );
};

export default Room;