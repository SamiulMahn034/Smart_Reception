import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Faculty_display from './Faculty_display';
import './Appoinment.css'
import Header from '../Header/Header';

const Appointment = () => {
    const[users,setUsers]=useState([])
    useEffect(() =>{
        fetch('/Faculty.json')
        .then(res => res.json())
        .then(data => setUsers(data))


    },[])
    const filterResult=(category)=>{
      const result = users.filter((curData)=>{
        return curData.designation===category;
      });
      setUsers(result);
    }
    const filterResultd=(category)=>{
      const result = users.filter((curData)=>{
        return curData.dept===category;
      });
      setUsers(result);
    }
    let fltr=2100;
    return (
        <div>
            <Header></Header>
            <div className="container-fluid"style={{display:'flex', flexDirection:'row', height:'650px', width:'100%', paddingLeft:'80px', paddingRight:'50px',alignItems:'center', justifyContent:'center'}}>
            <div style={{paddingRight:'200px' , backgroundColor:'orange',height:'100%',alignItems:'center',marginTop:'190px',paddingLeft:'80px'}} >
                <br /><br /><br/>
                <h4>Filter By Designetion</h4>
                
                <div className="form-check">
  <input onChange={() =>filterResult('Professor')} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Professor
  </label>
</div>
<div class="form-check">
  <input onChange={() =>filterResult('Assistent Professor')}className="form-check-input" type="checkbox" value="radio" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    Assistent Professor
  </label>
</div>
<div class="form-check">
  <input onChange={() =>filterResult('Lecturer')} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    Lecturer
  </label>
</div>
<h4>Filter By Department</h4>
                
                <div class="form-check">
  <input onChange={() =>filterResultd('CSE')} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    CSE
  </label>
</div>
<div class="form-check">
  <input onChange={() =>filterResultd('EEE')} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    EEE
  </label>
</div>
<div class="form-check">
  <input onChange={() =>filterResultd('BBA')} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label" for="flexCheckChecked">
    BBA
  </label>
</div>
</div>


      <div className='body3'>
            {
              users.map(user=> <Faculty_display key={user.id} user={user} ></Faculty_display>)
            }
      </div>
      
        </div>
        </div>
        

    );
};

export default Appointment;