import logo from './logo.svg';
import Nav from './component/login.jsx';
import './component/style.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Error from './component/error.jsx';
import Aboutus from './component/aboutus.jsx';
import Readmoree from './component/readmoree.jsx';
import Navbar from './component/navbar.jsx';
import react from "react"
function App() {
  return (
    <>
<BrowserRouter>
       <Routes>
         <Route path="/register" element={<Navbar />}/> 
         <Route path="/login" element={<Nav />}/> 
         <Route path="/aboutus" element={<Aboutus />}/>
         <Route path="/error" elements={<Error />}/>
         <Route path="/readmoree" elements={<Readmoree />}/>
        

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
