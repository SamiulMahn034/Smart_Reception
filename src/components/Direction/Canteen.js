import React from 'react';
import Lib from '../Direction/map/canteen direction.png'
import Add_au from '../Direction/map/canteen.mp3'
import { Link } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
const Canteen = () => {
    return (
        <div>
                                <div className='body_dir' style={{display:'flex', flexDirection:'row', height:'650px', width:'100%', paddingLeft:'80px', paddingRight:'50px'}}>
           <div>
              <img src={Lib}  style={{width:'500px',height:'600px',alignItems: 'center',paddingTop:'70px'}}/>
             
           </div>
           <div style={{ display:'flex', flexDirection:'column', alignItems: 'center',width:'800px',height:'530px',marginTop:'70px'}}
  className="container">
               <h3>Go few steps forward from the entrance and turn right
walk about 40 steps and then turn left. You'll find the canteen.</h3>
               <ShakaPlayer  autoPlay src={Add_au} />

               <br></br>
               <Link to='/direction'><button className=" btn rounded-pill btn-dark shadow fw-bold"  style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Back</button></Link>
           </div>
           
        </div>
        </div>
    );
};

export default Canteen;