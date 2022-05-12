import Mode from "./Mode";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <h2>Image Gallery</h2>
      <Navbar />
      <Mode />
    </header>
  );
};

export default Header;
