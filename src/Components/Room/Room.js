import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './room.css'
import{Link} from 'react-router-dom'
const Room = (props) => {
  const{title,description,imgUrl,bedType} = props.data;
  
  
  
  return (
    
       <div className="col-md-4 room ">
      <div className="card" style={{width: "18rem"}}>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={`book/${bedType}`} className="btn btn-primary">Book</a>
  </div>
</div>
    </div>
    
  );
};

export default Room;