import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Admin_Faq = () => {
    const [faq,setFaq]=useState([])
    useEffect(()=>{
        getFaq();
  
    },[])
    function getFaq(){
        axios.get('http://localhost:80/Smart Recieption/api/user/')
        .then(function(response){
            console.log(response.data)
            setFaq(response.data)
        })
    }
    
    return (
        <div>
            
            <h1 style={{color:'orange', textAlign:'center'}}>List OF FAQs</h1>
            <div className='container ' style={{ border: '5px solid  white',paddingBottom:'50px',height:'500px',width:'900px'}}>
            <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Question</th>
          <th>Answer</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {
                faq.map(faq=>   <tr>      
                <td>{faq.Question}</td>
                <td>{faq.Answer}</td>
                <td>
                    <Link to={`${faq.ID}/update_faq`}><button className='btn btn-success'>Update</button></Link></td>
                <td><button className='btn btn-danger'>Delete</button></td> 
                </tr> )
                 
            }

        
      
      
      </tbody>
    </Table>
            <br />
           
            </div> 
        </div>
    );
};

export default Admin_Faq;