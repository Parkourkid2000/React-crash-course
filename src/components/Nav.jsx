import {  Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <Link to="/base">Home</Link>
      <Link to="/users/TonyTesla">TonyTesla</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;
