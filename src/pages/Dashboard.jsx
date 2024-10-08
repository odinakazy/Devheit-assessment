/* eslint-disable react/jsx-no-undef */
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import CampaignCard from "../components/CampaignCard";
import Instargram from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import Youtube from "../assets/youtube.svg";
import Twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import MobileNavigation from "../Modal/MobileNavigation";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import Sort from "../components/Sort";
import CreateCampaign from "../Modal/CreateCampaign";

const mockCampaigns = [
  {
    name: "Epic Social",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra",

    channels: [
      { icon: <img src={Instargram} /> },
      { icon: <img src={Tiktok} /> },
      { icon: <img src={Youtube} /> },
      { icon: <img src={Twitter} /> },
      { icon: <img src={facebook} /> },
    ],
    budget: "$1000 - $2000",
  },
  {
    name: "Epic Social",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra",
    channels: [
      { icon: <img src={Instargram} /> },
      { icon: <img src={Tiktok} /> },
      { icon: <img src={Youtube} /> },
      { icon: <img src={Twitter} /> },
      { icon: <img src={facebook} /> },
    ],
    budget: "$1000 - $2000",
  },
  {
    name: "Epic Social",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra",
    channels: [
      { icon: <img src={Instargram} /> },
      { icon: <img src={Tiktok} /> },
      { icon: <img src={Youtube} /> },
      { icon: <img src={Twitter} /> },
      { icon: <img src={facebook} /> },
    ],
    budget: "$1000 - $2000",
  },
  {
    name: "Epic Social",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra",
    channels: [
      { icon: <img src={Instargram} /> },
      { icon: <img src={Tiktok} /> },
      { icon: <img src={Youtube} /> },
      { icon: <img src={Twitter} /> },
      { icon: <img src={facebook} /> },
    ],
    budget: "$1000 - $2000",
  },
  {
    name: "Viral Social",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra",

    channels: [
      { icon: <img src={Instargram} /> },
      { icon: <img src={Tiktok} /> },
      { icon: <img src={Youtube} /> },
      { icon: <img src={Twitter} /> },
      { icon: <img src={facebook} /> },
    ],
    budget: "$1000 - $2000",
  },
  {
    name: "Connect Trend",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra",
    channels: [
      { icon: <img src={Instargram} /> },
      { icon: <img src={Tiktok} /> },
      { icon: <img src={Youtube} /> },
      { icon: <img src={Twitter} /> },
      { icon: <img src={facebook} /> },
    ],
    budget: "$1000 - $2000",
  },
];
function Dashboard() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [openMobileNavModal, setOpenMobileNavModal] = useState(false);
  const [openCampaignModal, setOpenCampaignModal] = useState(false);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    // Filter campaigns based on the first word of name or company
    const filteredCampaigns = mockCampaigns.filter((campaign) => {
      const firstWordName = campaign.name.split(" ")[0].toLowerCase();
      const firstWordCompany = campaign.company.split(" ")[0].toLowerCase();

      return (
        firstWordName.includes(searchQuery) ||
        firstWordCompany.includes(searchQuery)
      );
    });

    // If no campaigns match, display "No campaign found"
    if (filteredCampaigns.length === 0) {
      alert("No campaign found");
    }

    setCampaigns(filteredCampaigns);
  };

  const handleCampaignData = (newCampaignData) => {
    // add new campaigne data
    setCampaigns((prevCampaigns) => [newCampaignData, ...prevCampaigns]);
  };

  return (
    <div className="relative bg-[#ffffff] min-h-screen lg:flex lg:w-full">
      {openCampaignModal && (
        <CreateCampaign
          onOpen={setOpenCampaignModal}
          onSubmitData={handleCampaignData}
        />
      )}
      {openMobileNavModal && (
        <MobileNavigation
          openMobile={openMobileNavModal}
          OpenMobileNavModal={setOpenMobileNavModal}
        />
      )}
      <Navbar OpenMobileNavModal={setOpenMobileNavModal} />
      <Sidebar />
      <div className="p-4 lg:w-[80%] lg:bg-[#FAFAFA]">
        <Searchbar onSearch={handleSearch} />
        <Header onOpen={setOpenCampaignModal} />
        <Overview />
        <Sort onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:w-full">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
