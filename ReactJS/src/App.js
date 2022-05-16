import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register';
import Front from './components/front';
//import Navbar from './Components/Navbar/Navbar';
import Footer from './components/footer';
import { BrowserRouter , Route, Link, Routes, Redirect, Switch, Router} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
  
    <div className="App">
     
        
      
      
      <div className="container-fluid">
          <BrowserRouter>
            <ul className="nav nav-tabs">
             
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link> </li>
              
            </ul>
            <Routes>
              
              <Route path="/" element={<Front/> } />
              <Route path="/register" element={<Register /> } />
              <Route path="/login" element={<Login /> } />
              
            </Routes>
 
          </BrowserRouter>
      </div>
     
     
      <Footer />
          
          {/*} <Register /> 
           <Front />
             />*/}
    </div>
  );
}

export default App;
