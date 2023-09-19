import { Outlet } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon as MagnifyingGlassIconSolid } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Layout() {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <>
      <header
        className="bg-zinc-900 flex flex-col justify-center items-center fixed top-0 left-0 right-0"
      >
        <div
          className="flex justify-between items-center w-full p-3"
        >
          <h1
            className="text-green-500 text-xl font-bold"
          >
            HIT News
          </h1>
          {
            searchBar ? (
            <MagnifyingGlassIconSolid
              className="text-green-500 w-6 cursor-pointer"
              onClick={() => setSearchBar(!searchBar) }
            />
            ) : (
            <MagnifyingGlassCircleIcon
              className="text-green-500 w-6 cursor-pointer"
              onClick={() => setSearchBar(!searchBar) }
            />
            )
          }
        </div>
        { searchBar && <SearchBar /> }
        <Navbar />
      </header>
      <main
        className="mt-16 p-4 pt-6 bg-slate-300 min-h-screen"
      >
        <Outlet />
      </main>
    </>
  )
}

export default Layout;0