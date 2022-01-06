import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Profile</Link> | {" "}
    <Link to="/featuredprojects">Featured Projects</Link> | {" "}
    <Link to="/allprojects">All my Projects</Link> | {" "}
    <Link to="/contact">Contact</Link> | {" "}
  </nav>
)

export default Navbar;