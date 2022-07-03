
import React, { useEffect, useState,useSearchParams } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Booking_appointment = () => {
    const[users,setUsers]=useState([])
    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get("id"))
    useEffect(() =>{
        fetch('/Faculty.json')
        .then(res => res.json())
        .then(data => setUsers(data))


    },[])
    return (
        <div>
                             <Card style={{ height:'500px'}}>
      <Card.Img variant="top"  src={users[1].image} style={{ height:'300px' }} />
      <Card.Body>
        <Card.Title>{users[1].name}</Card.Title>
        <Card.Text>
            {users[1].designation}
        </Card.Text>
        <Card.Text style={{paddingBottom:'0px'}}>
            {users[1].dept}
        </Card.Text>
        <Link to='/appointment/booking_appointment/:id'><Button style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)' ,}} variant="primary">Book an appoinment</Button></Link>

      </Card.Body>
    </Card> 
        </div>
    );
};

export default Booking_appointment;