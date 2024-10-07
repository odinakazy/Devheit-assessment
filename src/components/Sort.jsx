/* eslint-disable react/prop-types */
function Sort({ onSearch }) {
  return (
    <div>
      {/* Title and Search Result */}
      <div className=" hidden lg:block mb-4 font-sf-pro">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#053559]">
            Explore Campaigns
          </h2>
          <div className="flex justify-between items-center">
            <div className="relative w-[420px]">
              <input
                type="text"
                placeholder="Search Description"
                className="w-full p-3 rounded-lg bg-[#E7F5FF] placeholder-blue-bold focus:outline-none"
                onChange={onSearch}
              />
              <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white bg-[#053559] px-5 py-4 rounded-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 14L11.1047 11.1047M11.1047 11.1047C11.5999 10.6094 11.9928 10.0215 12.2608 9.37436C12.5289 8.72728 12.6668 8.03373 12.6668 7.33333C12.6668 6.63293 12.5289 5.93939 12.2608 5.2923C11.9928 4.64522 11.5999 4.05726 11.1047 3.562C10.6094 3.06674 10.0215 2.67388 9.37438 2.40585C8.72729 2.13782 8.03375 1.99986 7.33335 1.99986C6.63295 1.99986 5.9394 2.13782 5.29232 2.40585C4.64523 2.67388 4.05727 3.06674 3.56202 3.562C2.5618 4.56222 1.99988 5.91881 1.99988 7.33333C1.99988 8.74786 2.5618 10.1044 3.56202 11.1047C4.56224 12.1049 5.91882 12.6668 7.33335 12.6668C8.74787 12.6668 10.1045 12.1049 11.1047 11.1047Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter Options */}
        <div className="flex items-center font-sf-pro justify-between mt-4">
          <span className="text-sm text-gray-500">
            Search results: <strong>432 Blog post campaigns</strong>
          </span>

          {/* Sort Options */}
          <div className="flex items-center font-sf-pro gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="bg-[#E7F5FF] rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Category</option>
              <option>Date</option>
              <option>Popularity</option>
            </select>

            {/* View options */}
            <button className="text-gray-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5625 2.25H3.1875C2.66973 2.25 2.25 2.66973 2.25 3.1875V9.5625C2.25 10.0803 2.66973 10.5 3.1875 10.5H9.5625C10.0803 10.5 10.5 10.0803 10.5 9.5625V3.1875C10.5 2.66973 10.0803 2.25 9.5625 2.25Z"
                  stroke="#053559"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8125 2.25H14.4375C13.9197 2.25 13.5 2.66973 13.5 3.1875V9.5625C13.5 10.0803 13.9197 10.5 14.4375 10.5H20.8125C21.3303 10.5 21.75 10.0803 21.75 9.5625V3.1875C21.75 2.66973 21.3303 2.25 20.8125 2.25Z"
                  stroke="#053559"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5625 13.5H3.1875C2.66973 13.5 2.25 13.9197 2.25 14.4375V20.8125C2.25 21.3303 2.66973 21.75 3.1875 21.75H9.5625C10.0803 21.75 10.5 21.3303 10.5 20.8125V14.4375C10.5 13.9197 10.0803 13.5 9.5625 13.5Z"
                  stroke="#053559"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8125 13.5H14.4375C13.9197 13.5 13.5 13.9197 13.5 14.4375V20.8125C13.5 21.3303 13.9197 21.75 14.4375 21.75H20.8125C21.3303 21.75 21.75 21.3303 21.75 20.8125V14.4375C21.75 13.9197 21.3303 13.5 20.8125 13.5Z"
                  stroke="#053559"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="text-gray-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6H20M4 6.01L4.01 5.999M4 12.01L4.01 11.999M4 18.01L4.01 17.999M8 12H20M8 18H20"
                  stroke="#053559"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;
