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

const mockCampaigns = [
  {
    name: "Epic Social Buzz",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra feugiat feugiat. Malesuada eleifend pellentesque sed mauris ultrices dolor morbi.",
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
    name: "Viral Social Sparks",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra feugiat feugiat. Malesuada eleifend pellentesque sed mauris ultrices dolor morbi.",
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
    name: "Connect & Trend",
    company: "Samsung • Product Review",
    description:
      "A rhoncus pulvinar neque vitae quam id ut est varius. Ac sed enim lectus consequat ut. Commodo condimentum accumsan pharetra feugiat feugiat. Malesuada eleifend pellentesque sed mauris ultrices dolor morbi.",
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

  return (
    <div className="bg-[#ffffff]min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="p-4 ">
        <Searchbar onSearch={handleSearch} />

        <div>
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
