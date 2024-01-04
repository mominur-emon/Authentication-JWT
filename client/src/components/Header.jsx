import { CiLogin, CiLogout } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="navbar">
      <div>MERN Auth</div>
      <div className="sign">
        <div className="sign-in">
          <CiLogin /> Sign In
        </div>
        <div>
          <CiLogout /> Sign Up
        </div>
      </div>
    </nav>
  );
};

export default Header;
