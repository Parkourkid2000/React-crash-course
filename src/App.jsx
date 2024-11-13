import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx"
import Base from "./pages/Base.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Users from "./pages/Users.jsx";


function App() {
  return (
    
      <Router>
<Nav></Nav>
        <Routes>
        <Route path='/base' element={<Base />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path="users/:name" element={ <Users />} ></Route>
        </Routes>
      </Router>
  
  );
}

export default App;
