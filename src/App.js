
import './App.css'
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';

import {BrowserRouter as Router,Routes} from 'react-router-dom'


function App() {
  return (
    <>
     <Router>
       {/* <Routes exact path="/" component={Home}/>
       <Routes exact path="/Faq" component={Faq}/> */}
       <Routes exact path="/">
            <Home></Home>
          </Routes>
       </Router>
       </>
//   <div>
//  <Home></Home>
//   </div>


 
  );
}

export default App;
