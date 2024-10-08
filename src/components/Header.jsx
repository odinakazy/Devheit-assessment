/* eslint-disable react/prop-types */
import Notificationicon from "../assets/notification.svg";
import Messageicon from "../assets/message.svg";

function Header({ onOpen }) {
  const openHandler = () => {
    onOpen(true);
  };
  return (
    <div className="hidden lg:block lg:flex lg:justify-between lg:items-center lg:mb-6 lg:mt-4 lg:font-sf-pro">
      <h2 className="text-lg font-bold text-[#053559]">Dashboard</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={openHandler}
          className="bg-[#053559] text-white px-4 font-sf-pro py-2 rounded-md"
        >
          + Create a New Campaign
        </button>
        <div className="relative">
          <img src={Messageicon} alt="Notification" className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
        </div>
        <img src={Notificationicon} alt="Settings" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Header;
