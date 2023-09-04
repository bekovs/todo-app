import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Link to="/"><li>Todos</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;