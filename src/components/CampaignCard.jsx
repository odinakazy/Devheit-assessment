/* eslint-disable react/prop-types */
import Icon from "../assets/icon.svg";
// Helper function to generate the Name abbreviation
const getAbbreviation = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const CampaignCard = ({ campaign }) => {
  return (
    <div className="rounded-lg border-b mb-4 mt-6 py-4 ">
      {/* Abbreviation Circle */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 flex-shrink-0 rounded-md flex items-center justify-center bg-orange-500 text-white font-bold">
          {getAbbreviation(campaign.name)}
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="font-bold font-sf-pro text-[#053559] text-[1.2rem]">
              {campaign.name}
            </h3>
            <div className="flex items-center gap-2">
              <h6 className="text-[0.7rem] font-sf-pro">Posted 2 day ago</h6>
              <img src={Icon} alt="icon" />
            </div>
          </div>
          <p className="text-[1rem] font-sf-pro text-[#0D1821] font-semi-bold">
            {campaign.company}
          </p>
        </div>
      </div>

      {/* Campaign Content */}
      <div className="flex-grow">
        {/* Header */}

        <p className=" font-sf-pro text-[#0D1821] text-[0.875rem] mt-2">
          {campaign.description}
        </p>

        {/* Channels */}
        <div className="mt-3">
          <h5 className="font-sf-pro text-[#053559] text-[0.975rem] font-semi-bold mb-2">
            channel
          </h5>
          <div className="flex items-center gap-2">
            <div className="flex space-x-1 ">
              {campaign.channels.map((channel, index) => (
                <span key={index}>{channel.icon}</span>
              ))}
            </div>
            <span className="font-sf-pro text-[#053559] text-[0.975rem]">
              + 2 more
            </span>
          </div>
        </div>

        {/* Budget & Button */}
        <div className="flex justify-between items-center mt-3">
          <div>
            <h5 className="font-sf-pro text-[#0D1821] text-[0.975rem]">
              Budget
            </h5>
            <span className="font-bold font-sf-pro text-[#053559] text-[1.25rem]">
              {campaign.budget}
            </span>
          </div>
          <button className="bg-[#053559] text-white py-2 px-4 rounded-lg text-sm font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
