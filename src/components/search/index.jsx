import React from "react";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="w-full flex justify-around items-center mb-10 mt-5">
      <input
        type="text"
        className="w-3/5 h-5 border border-gray-500 rounded-sm px-8 py-5 text-xl text-gray-700 bg-white"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="border-none rounded-sm bg-black text-white text-xl px-8 py-[7px]"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
