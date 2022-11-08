/* eslint-disable */
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className="navBar">
      <div className="Logo">
        Math Magicians
      </div>
      <ul className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calculator">Calculator</Link>
        <Link className="link" to="/quotes">Quotes</Link>
      </ul>
    </div>
    )
  }

export default Navbar;