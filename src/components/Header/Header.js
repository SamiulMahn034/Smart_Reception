import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark  text-white ">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active  text-white "  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white " style={{paddingLeft:'50px'}}  href="#">Log in(Officials)</a>
        </li>
        
      </ul>
      <form className="d-flex " role="search" >
      
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <h4>or</h4>
        <div style={{paddingLeft:'20px'}}>
        <button  className="btn btn-outline-success rounded-pill "   type="submit">Speak</button></div>
      </form>
    </div>
  </div>
</nav>
 
        </div>
    );
};

export default Header;