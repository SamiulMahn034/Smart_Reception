import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const Header = () => {
  // const [searchParams,useSearchParams] = useSearchParams();
  // // changeHandle()
  // console.log(searchParams.get(""));
  // const ref = useRef(null);
  const {transcript,resetTranscript}=useSpeechRecognition();

  useEffect(()=>{
    SpeechRecognition.startListening({continues:true});
    console.log('listening')
  },[])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark  text-white ">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active  text-white "  aria-current="page">Home</Link>
         
        </li>
        <li className="nav-item">
          <Link to='/Admin'className="nav-link  text-white " style={{paddingLeft:'50px'}}  >Log in(Officials)</Link>
        </li>
        
      </ul>

      <form className="d-flex " role="search" >
      
        
        <input   value={transcript}  className="form-control me-2 " type="text" placeholder="Search" aria-label="Search"/>
        <h4>or</h4>
        <div style={{paddingLeft:'20px'}}>
        <button onClick={()=>{
              SpeechRecognition.startListening({continues:true});
              console.log('')
        }} className="btn btn-outline-success rounded-pill "   type="submit">Speak</button></div>
      </form>
    </div>
  </div>
</nav>
 
        </div>
    );
};

export default Header;

function Show(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}