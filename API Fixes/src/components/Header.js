import { Link } from "react-router-dom";
const title = (
  <a href="/">
  <img
  className="logo"
  alt="logo" 
  src="https://cdn.dribbble.com/userupload/3948352/file/original-23058bebfe8c5bfb9f6dbd90b83dd6dd.jpg?compress=1&resize=1504x1128">
  </img>
  </a>
);
//React Functional Component
export const Header = () => (
  <div className="header">
    {title}
    <div className="nav-items">
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About Us</Link></li>
       <li><Link to="/contact">Contact Us</Link></li>
       <li><Link to="/"><i className="fa-solid fa-cart-shopping"></i></Link></li>
       <li><Link to="/login">Login</Link></li>  
      </ul>
    </div>
  </div>
);
export default Header;