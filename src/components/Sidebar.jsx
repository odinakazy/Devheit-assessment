import DashboardIcon from "../assets/dashicon.svg";
import CampaignIcon from "../assets/campicon.svg";
import MessageIcon from "../assets/messicon.svg";
import EarnIcon from "../assets/earnicon.svg";
import SettingIcon from "../assets/seticon.svg";
import First from "../assets/01.png";
import Second from "../assets/02.png";
import Third from "../assets/03.png";
function Sidebar() {
  return (
    <div
      className={`hidden lg:block lg:h-full lg:w-[20%] lg:bg-white lg:shadow-lg `}
    >
      {/* Sidebar Content */}
      <div className="p-4 h-full flex flex-col">
        <h2 className="font-bold text-[#053559] font-sf-pro text-[1.56rem] mb-6">
          Micro-Influx
        </h2>

        {/* Profile */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="rounded-full bg-orange-500 h-10 w-10 flex items-center justify-center text-white font-bold">
            OJ
          </div>
          <div>
            <h3 className="font-bold text-[#053559] font-sf-pro text-[1rem]">
              Olivia Jacobs
            </h3>
            <p className="text-sm text-gray-600">Influencer</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto">
          {/* Sidebar Menu */}
          <nav className="mt-6">
            <ul className="space-y-2">
              <li className="flex items-center p-2 bg-[#053559] font-sf-pro text-white rounded-md">
                <img src={DashboardIcon} alt="dashboardicon" />
                <span className="ml-3">Dashboard</span>
              </li>
              <li className="flex items-center p-2 text-[#0D1821] font-sf-pro hover:bg-gray-100 rounded-md">
                <img src={CampaignIcon} alt="dashboardicon" />
                <span className="ml-3">Campaigns</span>
              </li>
              <li className="flex items-center p-2 text-[#0D1821] font-sf-pro hover:bg-gray-100 rounded-md">
                <img src={MessageIcon} alt="dashboardicon" />
                <span className="ml-3">Messages</span>
              </li>
              <li className="flex items-center p-2 text-[#0D1821] font-sf-pro hover:bg-gray-100 rounded-md">
                <img src={EarnIcon} alt="dashboardicon" />
                <span className="ml-3">Earning History</span>
              </li>
              <li className="flex items-center p-2 text-[#0D1821] font-sf-pro hover:bg-gray-100 rounded-md">
                <img src={SettingIcon} alt="dashboardicon" />
                <span className="ml-3">Settings</span>
              </li>
            </ul>
          </nav>

          {/* Profile Information */}
          <div className="p-4 mt-8 bg-[#E7F5FF] rounded-lg flex flex-col">
            <div className="mb-2">
              <h5 className="text-[#053559] text-lg font-semibold text-center">
                75%
              </h5>
              <p className="font-bold font-sf-pro text-[#053559] text-center">
                Profile Completed
              </p>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Enhance your chances of selection by completing your profile – a
              fully detailed profile attracts more opportunities!
            </p>
            <button className="mt-4 w-full text-sm bg-[#053559] text-white py-2 rounded-md">
              Complete my Profile
            </button>
          </div>

          {/* Campaign Shortcuts */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Campaign Shortcuts</span>
              <button className="text-xs text-blue-600">View all</button>
            </div>
            <ul className="space-y-1">
              {/* Shortcut Item 1 */}
              <li className="flex items-center rounded-lg shadow-sm">
                <img
                  src={First} // Icon for the first campaign
                  alt="BeautyBlend Makeup"
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    BeautyBlend Makeup Challenge
                  </span>
                </div>
                <span className="ml-auto text-blue-600">→</span>
              </li>
              {/* Shortcut Item 2 */}
              <li className="flex items-center rounded-lg shadow-sm">
                <img
                  src={Second} // Icon for the second campaign
                  alt="Wanderlust Adventure"
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Wanderlust Adventure Series
                  </span>
                </div>
                <span className="ml-auto text-blue-600">→</span>
              </li>
              {/* Shortcut Item 3 */}
              <li className="flex items-center rounded-lg shadow-sm">
                <img
                  src={Third} // Icon for the third campaign
                  alt="Home Harmony"
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Home Harmony DIY Challenge
                  </span>
                </div>
                <span className="ml-auto text-blue-600">→</span>
              </li>
              <li className="flex items-center rounded-lg shadow-sm">
                <img
                  src={Second} // Icon for the second campaign
                  alt="Wanderlust Adventure"
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Wanderlust Adventure Series
                  </span>
                </div>
                <span className="ml-auto text-blue-600">→</span>
              </li>
              <li className="flex items-center rounded-lg shadow-sm">
                <img
                  src={Third} // Icon for the third campaign
                  alt="Home Harmony"
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Home Harmony DIY Challenge
                  </span>
                </div>
                <span className="ml-auto text-blue-600">→</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
