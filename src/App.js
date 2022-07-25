import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home.js';
import Partner from './component/Home/Partner.js';
import Partnerform from './component/Home/Partnerform.js';
import Contact from './component/Home/Contact.js';
import Gretting from './component/Home/Gretting.js';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Header from './component/Partials/Header.js';
import Footer from './component/Partials/Footer.js';

function App() {
  return (
    <>
        <Router>
          
            <Header/>
               <Routes>
                  <Route  exact path="/" element={<Home />} />
                  <Route  exact path="/Partner" element={<Partner /> }/>
                  <Route  exact path="/Partnerform" element={<Partnerform /> }/>
                  <Route  exact path="/Contact" element={<Contact /> }/>
                  <Route  exact path="/Gretting" element={<Gretting /> }/>
              </Routes>
              <Footer/>
        </Router>
     
    
    </>
  );
}

export default App;
