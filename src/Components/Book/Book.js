import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import "./book.css";
import BookingData from '../BookingData/BookingData';

const Book = () => {
    const{bedType} = useParams();
    const[loggedInUser,setLoggedInUser] = useContext(userContext)
    const [selectedDate, setSelectedDate] = useState({
      checkIn:new Date(),
      checkOut: new Date()
    
    });

  const handleCheckIn = (date) => {
    const newDate = {...selectedDate}
    newDate.checkIn = date;
    setSelectedDate(newDate)
  };
  const handleCheckOut = (date) => {
    const newDate = {...selectedDate}
    newDate.checkOut = date;
    setSelectedDate(newDate)
  };
  const handleBook = () =>{
    const newBooking = {...loggedInUser,...selectedDate}
    fetch('http://localhost:4000/addBooking',{
      method: 'POST',
      body: JSON.stringify(newBooking),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    
    }) 
    .then(response => response.json())
    .then(data => console.log(data))
    
  }
    return (
        <div>
   <h1>{bedType}</h1>
   <h1>{loggedInUser.name}</h1>                 
  <Grid className="upper" container justifyContent="center"  direction="row"  rowSpacing={1}  >
       
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      
      <Grid item xs={6}>
      <DesktopDatePicker
          label="CheckIn"
          inputFormat="MM/dd/yyyy"
          value={selectedDate.checkIn}
          onChange={handleCheckIn}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
      
        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        
      <Grid item xs={6}>
        {/* <DateTimePicker
          label="CheckOut"
          value={value.checkOut}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        <DesktopDatePicker
          label="CheckOut"
          inputFormat="dd/MM/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOut}
          renderInput={(params) => <TextField {...params} />}
        />
         </Grid>
         <Grid item xs={6}>
        {/* <DateTimePicker
          label="CheckOut"
          value={value.checkOut}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
         <Button onClick={handleBook} variant="contained">Book Now </Button>
         </Grid>
      </Stack>
      <BookingData></BookingData> 
    </LocalizationProvider>
    
           </Grid>
            
        </div>
    );
};

export default Book;