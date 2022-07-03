import React from 'react';
import Create_faq from '../Create Faq/Create_faq';
import {Link} from 'react-router-dom';
import Admin_header from './Admin_header';
const Admin = () => {
    return (
        <div className='body'>
            <Admin_header></Admin_header>
                       <main className="container text-white " style={{paddingTop:'150px'}}>
    <div>
        <h2 style={{fontSize:'50px'}}>WELCOME TO</h2>
    </div>
    <div>
        <h1 style={{fontSize:'90px'}}>UIU SMART RECEPTION</h1>
    </div>
    <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'250px'}}>
            <span >
                    Check all appointment's details here. 
            </span>
            </div>
            <div style={{paddingTop:'20px'}}>
           <Link to=''><button className=" btn rounded-pill btn-light shadow fw-bold" style={{color:'#fc614f', width:'80%', height:'50px'}}> Appointment</button></Link> 
            </div>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'250px'}}>
            <span >
                     Check and edit direction's details here. 
            </span>
            </div>
            <div style={{paddingTop:'20px'}}>
                <Link to =''><button className=" btn rounded-pill btn-light shadow fw-bold" style={{color:'#fc614f', width:'80%', height:'50px'  }}> Get Direction</button></Link>
            
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'250px'}}>
            <span >
                   Check and edit frequently asked questions here.
            </span>
            </div>
            <div style={{paddingTop:'20px'}}>
            <Link to='/Admin/Create_faq'><button className=" btn rounded-pill btn-light shadow fw-bold" style={{color:'#fc614f', width:'80%', height:'50px'}}> FAQ</button></Link>
            </div>
      
   
    </div>
    </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

</main> 
        </div>
    );
};

export default Admin;