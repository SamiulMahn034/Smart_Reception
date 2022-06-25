import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import DisplayFaq from './DisplayFaq';
import './Faq.css'
import bg from '../../imeges/faq.jpg'

const Faq = (props) => {
    const [faq,setFaq]=useState([])
    useEffect(()=>{
        fetch('./faq.json')
        .then(res => res.json())
        .then(data => setFaq(data))
        console.log(faq)
    
    },[])

    return (
        
        <div className='body1'>

            <Header></Header>
            <h1 style={{color:'orange', textAlign:'center'}}>FAQ</h1>
            <div className='container ' style={{ border: '5px solid  white',paddingBottom:'50px',height:'500px',width:'500px'}}>
            
            <br />
            {
                faq.map(faq=><DisplayFaq key={faq.id} question={faq.question} answer={faq.answer}></DisplayFaq> )
                
            }
            </div>
            </div>
       
    );
};

export default Faq;