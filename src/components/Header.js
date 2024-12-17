import logo from "../../public/images/taigan.png";

const Header = () => {
  const name = "Taizan Users";
  return (
    <div className="header">
      <img className="logo-header" src={logo} />
      <div className="header-middle">
        <ul>
          <li className="header-item">Electronics</li>
          <li className="header-item">Mobile</li>
          <li className="header-item">Laptop</li>
          <li className="header-item">TV</li>
        </ul>
      </div>
      <div className="header-end">
        <ul>
          <li className="header-item">Hello, {name}</li>
          <li className="header-item">Order</li>
          <li className="header-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
