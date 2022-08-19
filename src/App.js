import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './components/Login/login';
import Registration from './components/Registration/registration';
import Hamburgerpages from './components/Hamburgerpages/button';
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
      <Route exact path="/button" element={<Hamburgerpages />} />
    </Routes>
  );
}

export default App;
