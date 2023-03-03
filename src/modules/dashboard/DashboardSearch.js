import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-shadowPrimary  p-2 flex items-center w-full max-w-[458px]">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full px-5 text-sm bg-transparent placeholder:text-text4 text-text1"
        />
      </div>
      <button className=" w-[72px] bg-primary rounded-full flex items-center justify-center text-white h-10 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
