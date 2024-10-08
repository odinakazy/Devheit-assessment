import Viewicon from "../assets/view.svg";
import Viewicon2 from "../assets/view2.svg";
import Profileimg from "../assets/profile2.png";
function Overview() {
  return (
    <div className="hidden lg:block lg:grid lg:grid-cols-3 lg:font-sf-pro gap-6 mt-4 mb-6 ">
      {/* Financial Overview Section */}
      <div className="lg:col-span-2 bg-[#053559] text-[#ffffff] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between pb-2 border-b-[0.5px] border-solid border-[]#ffff items-center mb-4">
          <h3 className="text-xl font-bold ">Financial Overview</h3>
          <div className="flex gap-2">
            <a href="#" className="text-sm text-[#E9E9E9] ">
              View all campaigns
            </a>
            <img src={Viewicon} alt="viewicon" />
          </div>
        </div>
        <div className="flex items-center gap-12 mt-10">
          <div>
            <h4 className="text-lg font-semibold">Total Income</h4>
            <p className="text-2xl font-bold">$62,932</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Funds in Escrow</h4>
            <p className="text-2xl font-bold">$62,231</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Avg. Income Monthly</h4>
            <p className="text-2xl font-bold">$3,542</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <h5 className="text-sm font-semibold">January Summary:</h5>
          <p className="text-sm">
            Total Fund in Escrow: <strong>$350</strong> &nbsp; Total Income:{" "}
            <strong>$850</strong>
          </p>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white p-6 rounded-lg border border-[#053559]">
        <div className="flex mb-4 pb-1 items-center justify-between border-b border-[#053559]">
          <h3 className="text-lg font-bold text-[#053559] ">
            Profile Information
          </h3>
          <img src={Viewicon2} alt="viewicon" />
        </div>
        <div className="flex items-center gap-2">
          <img
            src={Profileimg}
            alt="Profile"
            className="w-18 h-18 rounded-full"
          />
          <div>
            <h4 className="font-bold text-[#053559]">Olivia Jacobs Jacobs</h4>
            <p className="text-sm">15%</p>
            <div className="relative w-full h-2 bg-gray-200 rounded-full mt-1">
              <div
                className="absolute h-2 bg-[#0D98FE] rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm">
          Complete your profile with details showcasing your skills and
          personality. Stand out and attract more opportunities.
        </p>
      </div>
    </div>
  );
}

export default Overview;
