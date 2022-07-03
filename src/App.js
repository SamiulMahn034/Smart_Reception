
import './App.css'
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import Direction from './components/Direction/Direction';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Appointment from './components/Appoinment/Appointment';
import Create_faq from './components/Create Faq/Create_faq';
import Update_faq from './components/Create Faq/Update_faq';
import Addmission_Dir from './components/Direction/Addmission_Dir';
import Admin from './components/Admin/Admin';
import Admin_Faq from './components/Create Faq/Admin_Faq';
import Booking_appointment from './components/Appoinment/Booking_appointment';
import Library from './components/Direction/Library';
import Canteen from './components/Direction/Canteen';




function App() {
  return (

    <div>
      

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home></Home>}>

  </Route>
  <Route path="/home" element={<Home></Home>}>

</Route>
  <Route path='/faq' element={<Faq></Faq>}>

  </Route>
  <Route path='/direction' element={<Direction/>}>

  </Route>
  <Route path='/appointment' element={<Appointment/>}>

  </Route>
  <Route path='/admin' element={<Admin></Admin>}>

</Route>
  <Route path='/direction/library' element={<Library/>}>

</Route>
  <Route path='/direction/canteen' element={<Canteen/>}>

</Route>
<Route path='/admin/Create_faq' element={<Create_faq/>}>

</Route>
<Route path='/Admin/Create_faq/:ID/update_faq' element={<Update_faq/>}>

</Route>
<Route path='appointment/booking_appointment/' element={<Booking_appointment/>}>

</Route>
<Route path='/direction/addmission_dir' element={<Addmission_Dir/>}>

</Route>

  <Route path='*' element={<Error></Error>}>

  </Route>
</Routes>
</BrowserRouter>


    </div>
       
          
       
       



 
  );
}

export default App;
