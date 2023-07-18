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
       <li><a href="/">Home</a></li>
       <li><a href="/">About Us</a></li>
       <li><a href="/">Contact Us</a></li>
       <li><a href="/">Cart</a></li>
       <li><a href="/">Login</a></li>
      </ul>
    </div>
  </div>
);
export default Header;