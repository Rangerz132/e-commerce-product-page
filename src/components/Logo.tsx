import { Link } from "react-router";
import LogoImg from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <Link to={"/"} className="cursor-pointer">
      <img src={LogoImg} alt={"Logo"} />
    </Link>
  );
};

export default Logo;
