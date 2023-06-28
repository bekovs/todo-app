import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/archive"><li>Archive</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;