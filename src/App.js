import './App.css';
import Navbar from './components/Navbar';
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [activeNavBar, setActiveNavBar] = useState(false);
  const activeNavBarHandler=(event) =>{
    setActiveNavBar(!activeNavBar);
  }
  return (
   <>
   <div className='shape'>
    <Router>
        <header><GiHamburgerMenu onClick={activeNavBarHandler}/></header>
        <Navbar set={activeNavBar}/>
        <div className='mainSection'> 
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Skills' element={<Skills/>} />
            <Route path='/Project' element={<Project/>} />
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </div>
    </Router>
    </div>
   </>
  );
}

export default App;
