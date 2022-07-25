import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home.js';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Header from './component/Partials/Header.js';

function App() {
  return (
    <>
        <Router>
            <Header/>
               <Routes>
                  <Route  exact path="/" element={<Home />} />
              </Routes>
        </Router>
    
    </>
  );
}

export default App;
