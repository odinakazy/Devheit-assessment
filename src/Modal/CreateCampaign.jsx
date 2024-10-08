/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Instargram from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import Youtube from "../assets/youtube.svg";
import Twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";

function CreateCampaign({ onOpen, onSubmitData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const closeModal = () => {
    onOpen(false);
  };

  const onSubmit = (data) => {
    const campaignData = {
      name: data.campaignTitle,
      company: data.brandName,
      description: data.campaignDescription,
      channels: [
        { icon: <img src={Instargram} /> },
        { icon: <img src={Tiktok} /> },
        { icon: <img src={Youtube} /> },
        { icon: <img src={Twitter} /> },
        { icon: <img src={facebook} /> },
      ],
      budget: `$${data.campaignBudget}`,
    };

    onSubmitData(campaignData);
    reset();
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm flex font-sf-pro justify-center items-center z-50">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-[555px] max-h-screen overflow-y-auto p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#053559]">
            Create Campaign
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#053559] mb-1">
              Campaign Title
            </label>
            <input
              type="text"
              {...register("campaignTitle", {
                required: "Campaign title is required",
              })}
              placeholder="Enter your campaign title here"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.campaignTitle && (
              <span className="text-red-500 text-sm">
                {errors.campaignTitle.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#053559] mb-1">
              Brand Name
            </label>
            <input
              type="text"
              {...register("brandName", { required: "Brand name is required" })}
              placeholder="Enter your brand name here"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.brandName && (
              <span className="text-red-500 text-sm">
                {errors.brandName.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#053559] mb-1">
              Campaign Category
            </label>
            <select
              {...register("campaignCategory", {
                required: "Category is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select your campaign category</option>
              <option value="Category 1">Movies</option>
              <option value="Category 2">Games</option>
            </select>
            {errors.campaignCategory && (
              <span className="text-red-500 text-sm">
                {errors.campaignCategory.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#053559] mb-1">
              Campaign Description
            </label>
            <textarea
              {...register("campaignDescription", {
                required: "Description is required",
              })}
              placeholder="Enter your campaign description here"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
            ></textarea>
            {errors.campaignDescription && (
              <span className="text-red-500 text-sm">
                {errors.campaignDescription.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#053559] mb-1">
              Campaign Budget
            </label>
            <input
              type="number"
              {...register("campaignBudget", {
                required: "Budget is required",
                min: 1,
              })}
              placeholder="Enter your campaign budget"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.campaignBudget && (
              <span className="text-red-500 text-sm">
                {errors.campaignBudget.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#053559] text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none text-base"
          >
            Create New Campaign
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCampaign;
