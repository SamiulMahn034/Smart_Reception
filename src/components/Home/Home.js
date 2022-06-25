import React from 'react';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <main className="container text-white body" style={{paddingTop:'150px'}}>
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
                    Get an appointment easily on suitable time. 
            </span>
            </div>
            <div style={{paddingTop:'20px'}}>
            <button className=" btn rounded-pill btn-light shadow fw-bold" style={{color:'#fc614f', width:'80%', height:'50px'}}> Get Appointment</button>
            </div>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'250px'}}>
            <span >
                    Get clear direction of any places of our campus.
            </span>
            </div>
            <div style={{paddingTop:'20px'}}>
            <a href=""><button className=" btn rounded-pill btn-light shadow fw-bold" style={{color:'#fc614f', width:'80%', height:'50px'  }}> Get Direction</button></a>
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'250px'}}>
            <span >
                    Get Answer of some frequently asked questions.
            </span>
            </div>
            <div style={{paddingTop:'20px'}}>
            <button className=" btn rounded-pill btn-light shadow fw-bold" style={{color:'#fc614f', width:'80%', height:'50px'}}> FAQ</button>
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

export default Home;