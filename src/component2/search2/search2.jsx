import React from "react";

export default function Search2({ search, setSearch, handleSearch }) {
  return (
    <>
      <div className="flex w-4/5 m-auto justify-evenly text-center items-center my-10 lg:space-x-0 space-x-4">
        <div>
          <input
            className="w-full px-10 py-3 lg:text-xl text-sm font-bold border border-gray-100 shadow-xl rounded-lg text-gray-800"
            type="text"
            placeholder="Enter a city name"
            value={search}
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="bg-black text-white px-8 lg:py-[17px] py-3 rounded-lg shadow-xl hover:bg-gray-800 transtion duration-500 "
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
