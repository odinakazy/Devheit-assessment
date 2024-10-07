/* eslint-disable react/prop-types */
import Logo from "../assets/Profile.png";
import Hamburger from "../assets/Content.svg";
function Navbar({ OpenMobileNavModal }) {
  const OpenMobileHandler = () => {
    OpenMobileNavModal(true);
  };

  return (
    <div className="flex items-center justify-between p-2 lg:hidden ">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" className="h-[4rem] w-[4rem]" />
      </div>

      <div>
        <span className="text-[#053559] font-sf-pro text-[1.25rem] font-bold ">
          Micro Influx
        </span>
      </div>
      {/* Hamburger Menu */}
      <div className="cursor-pointer">
        <button onClick={OpenMobileHandler}>
          <img src={Hamburger} alt="Hamburger" className="h-[4rem] w-[4rem]" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
