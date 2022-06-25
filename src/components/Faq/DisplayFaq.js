import React, { useState } from 'react';
import Header from '../Header/Header';
import Accordion from "react-bootstrap/Accordion"
import Badge from 'react-bootstrap/Badge';
const DisplayFaq = (props) => {

    return (
        <div style={{paddingLeft:'20px'}}>
            <Accordion className='' style={{width:'400px',alignItems:'center'}}>
  <Accordion.Item eventKey="0">
    <Accordion.Header >{props.question}</Accordion.Header>
    <Accordion.Body>
        {props.answer}
    </Accordion.Body>
  </Accordion.Item>


</Accordion>


        </div>

    );
};

export default DisplayFaq;