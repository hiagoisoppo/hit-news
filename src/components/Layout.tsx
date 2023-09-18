import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon as MagnifyingGlassIconSolid } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Layout() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <>
      <header
        className="bg-zinc-900 p-4 flex-col justify-between items-center fixed top-0 left-0 right-0"
      >
        <div
          className="flex justify-between items-center w-full"
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
  
          <Navbar />
        </div>
        {
          searchBar && <SearchBar />
        }
      </header>
      <main
        className="mt-14 p-4 bg-slate-300 min-h-screen"
      >
        <Outlet />
      </main>
    </>
  )
}

export default Layout;0