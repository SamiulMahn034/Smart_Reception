import React from 'react';


import Lib from '../Direction/map/library.png'
import Add_au from '../Direction/map/library.mp3'
import { useState,useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


import { Link } from 'react-router-dom';
const Library = () => {
    return (
        <div>
                    <div className='body_dir' style={{display:'flex', flexDirection:'row', height:'650px', width:'100%', paddingLeft:'80px', paddingRight:'50px'}}>
           <div>
              <img src={Lib}  style={{width:'500px',height:'600px',alignItems: 'center',paddingTop:'70px'}}/>
             
           </div>
           <div style={{ display:'flex', flexDirection:'column', alignItems: 'center',width:'800px',height:'530px',marginTop:'70px'}}
  className="container">
               <h3>Go about 60 steps forward from the entrance and turn left You'll find the library</h3>
               <ShakaPlayer  autoPlay src={Add_au} />

               <br></br>
               <Link to='/direction'><button className=" btn rounded-pill btn-dark shadow fw-bold"  style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Back</button></Link>
           </div>
           
        </div>
        </div>
    );
};

export default Library;