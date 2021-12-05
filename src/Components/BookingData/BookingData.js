import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const BookingData = () => {
    const[bookingData,setBookingData] = useState([])
    const[loggedInUser,setLoggedInUser] = useContext(userContext)
    useEffect(()=>{
     fetch(`http://localhost:4000/bookingData?email=${loggedInUser.email}`,{
        headers: {
            'authorization': `Bearer ${sessionStorage.getItem('token')}`,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
     })
     .then(response => response.json())
     .then(data => setBookingData(data))   

    },[])
    return (
        <div>
            <h3>{bookingData.length}</h3>
            {
                bookingData.map(book => <li>{book.name} from:{(new Date(book.checkIn).toDateString('dd/MM/yyyy'))} to:{(new Date(book.checkOut).toDateString('dd/MM/yyyy'))} </li>)
            }
        </div>
    );
};

export default BookingData;