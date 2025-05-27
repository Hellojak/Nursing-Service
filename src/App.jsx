import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import "./App.css"; 
// import '../../Neelam_Nursing/src/App.css'
import Hero from './Component/Hero';
import Services from './Component/Services';
import AboutUs from './Component/AboutUs';
import Testimonials from './Component/Testimonials';
import ContactPage from './Component/ContactPage';
import BookNow from './Component/BookNow';
import BookingConfirmation from './Component/BookingConfirmation';
import Footer from './Component/Footer';
import Layout from './Component/Layout';
import Home from './Component/Home';

// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      
        <Routes>
            <Route element={<Layout />}>
            <Route path='/' element={<Home/>}/>

            <Route path='/hero' element={<Hero/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
        
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/booknow' element={<BookNow/>}/>
            <Route path='/booking-confirmation' element={<BookingConfirmation/>}/>

            {/* <Route path='/footer' element={<Footer/>}/> */}

</Route>


        </Routes>
        
      </Router>
  );
}

export default App;