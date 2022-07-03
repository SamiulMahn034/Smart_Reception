import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import user from '../../imeges/user.jpg'
const Faculty_display = (props) => {

  const {name,designation,image,dept}=props.user
    return (
        <div >
                 <Card style={{ height:'500px'}}>
      <Card.Img variant="top"  src={image} style={{ height:'300px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {designation}
        </Card.Text>
        <Card.Text style={{paddingBottom:'0px'}}>
            {dept}
        </Card.Text>
        <Link to='appointment/booking_appointment'><Button style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)' ,}} variant="primary">Book an appoinment</Button></Link>

      </Card.Body>
    </Card> 
        </div>
    );
};

export default Faculty_display;