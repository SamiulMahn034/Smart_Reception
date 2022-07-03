import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

import Admin_header from '../Admin/Admin_header';
import { useNavigate,useParams } from 'react-router-dom';


const Update_faq = () => {
    const [input,setInput] = useState({})

    const {ID}=useParams();
    useEffect(()=>{
        getFaq();
  
    },[])
    function getFaq(){
        axios.get(`http://localhost:80/Smart Recieption/api/user/${ID}`)
        .then(function(response){
            console.log(response.data)
            setInput(response.data)
        })
    }
    const handleChange = (event) =>{
        const name=event.target.name
        const value= event.target.value
        setInput(values => ({...values,[name]: value}))
        
    }
    const clickHandle =(event) =>{
        axios.post('http://localhost:80/Smart Recieption/api/user/save',input)
        console.log(input)
        event.preventDefault()

    }
    const navigate = useNavigate();
    
    return (
        <div >
            
            <Admin_header/>
            <div className='container' style={{ border: '5px solid  white',paddingBottom:'50px',height:'500px',width:'900px'}}>
            <h1 style={{color:'orange', textAlign:'center'}}>FAQ</h1>
    <Form onSubmit={clickHandle}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >Question</Form.Label>
        <Form.Control value={input.Question} name="question" type="text" placeholder="Give a question" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label >Answer</Form.Label>
        <Form.Control value={input.Answer} name="answer" as="textarea" rows={3} placeholder="Give an answer" onChange={handleChange}  />
      </Form.Group>

<button onClick={() => navigate('/admin/create_faq')} className=" btn rounded-pill btn-dark shadow fw-bold" style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Save</button>

    </Form>

   </div>
        </div>
    );
};

export default Update_faq;