import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
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
export const Header = () => {
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store=>store.cart.items);
  return (
  <div className="header">
    {title}
    <div className="nav-items">
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About Us</Link></li>
       <li><Link to="/contact">Contact Us</Link></li>
       <li><Link to="/instamart">InstaMart</Link></li>
       <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>{cartItems.length}</Link></li>
       <li>{user.name}</li>
       <li><Link to="/login">Login</Link></li>  
      </ul>
    </div>
  </div>
  );
};
export default Header;