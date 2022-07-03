import React from 'react';
import floorPlan from '../../imeges/floor plan.png'
import Header from '../Header/Header';
import './Direction.css'
import { Link } from 'react-router-dom';
import { DropdownButton,Dropdown,ButtonGroup} from 'react-bootstrap';
const Direction = () => {
    return (
        <div>
            <Header></Header>
        <div className='body_dir' style={{display:'flex', flexDirection:'row', height:'650px', width:'100%', paddingLeft:'80px', paddingRight:'50px'}}>
       
        <img src={floorPlan} style={{width:'50%',height:'600px',alignItems: 'center',paddingTop:'70px'}} alt=""/>
        <br />
    <div style={{ display:'flex', flexDirection:'column', alignItems: 'center',width:'50%',backgroundColor:'white',height:'530px',marginTop:'70px'}}
  className="container" >
  <br /><br />
            <h2>Which place are you looking for?</h2>
        <hr />
        

        <br/>
        <Link to='/direction/addmission_dir'>
        <button className=" btn rounded-pill btn-dark shadow fw-bold"style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Admission Office</button></Link>
        <br/>
        <Link to='/direction/library'><button className=" btn rounded-pill btn-dark shadow fw-bold" style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Library</button></Link>
        
        <br/>
        <Link to='/direction/canteen'><button className=" btn rounded-pill btn-dark shadow fw-bold" style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Canteen</button></Link>
        <br/>
        <>
  {['Warning'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        size='lg'
        variant={variant.toLowerCase()}
        title='Click here to get your place'
      >
        <Dropdown.Item eventKey="1">CSE Department</Dropdown.Item>
        <Dropdown.Item eventKey="2">EEE Department</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          BBA Department
        </Dropdown.Item>

      </DropdownButton>
    ),
  )}
</>
        <br/><br/><br/><br/>
        
        <Link to='/'><button className=" btn rounded-pill btn-dark shadow fw-bold"  style={{backgroundImage: 'linear-gradient(to right ,#fc604f , #f08d20)',width:'250px'}}>Back</button></Link>
       
    </div>
    <br/>
    </div>
    </div>
    );
};

export default Direction;