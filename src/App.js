import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './components/Login/login';
import Registration from './components/Registration/registration';
import User from './components/User/userregister';
import Ham from './components/Ham/button1';
import Button2 from './components/Button2/button2';
import Button3 from './components/Button3/button3';
import Button4 from './components/Button4/button4';
import Button5 from './components/Button5/button5';
import Button6 from './components/Button6/button6';
import Button7 from './components/Button7/button7';
import Adminlogin from './components/Adminlogin/adminlogin';
import Adminhomepage from './components/Adminhomepage/adminhome';
import Bulkadd from './components/Bulkadd/bulkadd';
import Admin from './components/Admin/Admin';
import Holidays from './components/Holidays/Holidays';
import Employees from './components/Employees/Employees';
import Userdetails from './components/Userdetails/Userdetails';
function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className="App container">
            <Navbar />
            <Home />
            <Footer />
          </div>
        }
      />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contactUs" element={<ContactUs />} />
      <Route exact path="/userregister" element={<User />} />
      <Route exact path="/button1" element={<Ham />} />
      <Route exact path="/button2" element={<Button2 />} />
      <Route exact path="/button3" element={<Button3 />} />
      <Route exact path="/button4" element={<Button4 />} />
      <Route exact path="/button5" element={<Button5 />} />
      <Route exact path="/button6" element={<Button6 />} />
      <Route exact path="/button7" element={<Button7 />} />
      <Route exact path="/adminlogin" element={<Adminlogin />} />
      <Route exact path="/adminhome" element={<Adminhomepage />} />
      <Route exact path="/bulkadd" element={<Bulkadd />} />
      <Route exact path="/Admin" element={<Admin />} />
      <Route exact path="/Holidays" element={<Holidays />} />
      <Route exact path="/Employees" element={<Employees />} />
      <Route exact path="/Userdetails/:id" element={<Userdetails />} />
    </Routes>
  );
}

export default App;
