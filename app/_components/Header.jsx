"use client";
import { useState } from "react";
import useMenuStore from "../../store/MenuStore";
const Header = () => {
  let { filterBySearch } = useMenuStore();
  let [search, setSearch] = useState("");
  return (
    <header className="py-5 shadow">
      <div className="container flex gap-4 items-center flex-wrap sm:justify-between justify-center">
        <h1 className="text-primary font-bold text-2xl sm:text-4xl">
          Restaurant
        </h1>
        <div className="flex items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-1 focus:outline-none focus:border-primary"
          />
          <button
            onClick={() => {
              filterBySearch(search);
              setSearch("");
            }}
            type="button"
            className="ml-4 bg-primary text-white rounded px-4 py-1 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
