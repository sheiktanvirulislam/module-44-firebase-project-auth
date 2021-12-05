import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from '../Room/Room'
import './home.css';

const Home = () => {
    const roomData = [
     {
         title:"Standard Single Room",
         description:"Standard Single Room are available",
         imgUrl:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         bed: 1,
         capacity:1,
         bedType:"Single",
         avatar: "S",
         price: 119,


     },
     {
        title:"Couple Room",
        description:"Rooms For Couple",
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtD66k9OsfKFeDsXw9m8GElx8TBtM7H_Kj_tcE9Z4bTnB8L542RwKXhvqECuokvf85C4&usqp=CAU",
        bed: 1,
        capacity:2,
        bedType:"Double",
        avatar: "D",
        price: 149,


    },
    {
        title:"Family Capacity Room",
        description:"Have a lots of facility for families.",
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rPWWOS8W15Txy788I7C7k-Cm36TlE2g8zkZ-z9Df_clWkS2OLybTYTxwdxKSg1mqw3Q&usqp=CAU",

        bed: 2,
        capacity:3,
        bedType:"Family",
        avatar: "F",
        price: 200,


    }, 
    ] 

    
    return (
        <div className="row container ">
           {
              roomData.map(data=> <Room data={data}></Room>) 
              
           }
        
        </div>
    );
};

export default Home;