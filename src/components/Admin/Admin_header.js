import React from 'react';
import {Link} from 'react-router-dom'
const Admin_header = () => {
    return (
        <div>
                        <nav className="navbar navbar-expand-lg bg-dark  text-white ">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/Admin' className="nav-link active  text-white "  aria-current="page">Home</Link>
         
        </li>

        
      </ul>
      <form className="d-flex " role="search" >
      

        <div style={{paddingLeft:'20px'}}>
            <Link to='/'>  <button  className="btn btn-outline-success rounded-pill "   type="submit">Log Out</button></Link>
</div>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Admin_header;