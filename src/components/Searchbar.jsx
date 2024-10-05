/* eslint-disable react/prop-types */
function Searchbar({ onSearch }) {
  return (
    <div className="flex items-center bg-[#E7F5FF] rounded-lg p-2 ">
      {/* Search Icon */}
      <div className="flex items-center pl-2 ">
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 14L11.1047 11.1047M11.1047 11.1047C11.5999 10.6094 11.9928 10.0214 12.2608 9.37435C12.5289 8.72726 12.6668 8.03372 12.6668 7.33332C12.6668 6.63292 12.5289 5.93937 12.2608 5.29229C11.9928 4.6452 11.5999 4.05724 11.1047 3.56198C10.6094 3.06673 10.0215 2.67387 9.37438 2.40583C8.72729 2.1378 8.03375 1.99985 7.33335 1.99985C6.63295 1.99985 5.9394 2.1378 5.29232 2.40583C4.64523 2.67387 4.05727 3.06673 3.56202 3.56198C2.5618 4.5622 1.99988 5.91879 1.99988 7.33332C1.99988 8.74784 2.5618 10.1044 3.56202 11.1047C4.56224 12.1049 5.91882 12.6668 7.33335 12.6668C8.74787 12.6668 10.1045 12.1049 11.1047 11.1047Z"
            stroke="#053559"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Campaigns"
        className="w-full p-3 rounded-lg bg-[#E7F5FF] placeholder-blue-bold focus:outline-none"
        onChange={onSearch}
      />
    </div>
  );
}

export default Searchbar;
