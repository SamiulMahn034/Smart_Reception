import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import DisplayFaq from './DisplayFaq';
import './Faq.css'
import axios from 'axios';
import bg from '../../imeges/faq.jpg'


const Faq = (props) => {
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
        
        <div className='body1'>

            <Header></Header>
            <h1 style={{color:'orange', textAlign:'center'}}>FAQ</h1>
            <div className='container ' style={{ border: '5px solid  white',paddingBottom:'50px',height:'500px',width:'500px'}}>
            
            <br />
            {
                faq.map(faq=><DisplayFaq key={faq.ID} question={faq.Question} answer={faq.Answer}></DisplayFaq> )
                
            }
            </div>
            </div>
       
    );
};

export default Faq;