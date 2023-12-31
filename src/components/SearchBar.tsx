import { useState } from "react";
import { useNews } from "../contexts/NewsProvider";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon as MagnifyingGlassIconSolid } from "@heroicons/react/24/solid";

function SearchBar () {
  const { filters, handleTextFilter } = useNews();
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div
      className="flex items-center justify-end text-green-500 gap-1 w-2/3 hover:text-zinc-300 transition-all duration-300"
    >
      {
        searchBar ? (
          <>
            <input
              type="text"
              placeholder="Digite o termo de busca"
              value={ filters.textFilter }
              onChange={ (e) => handleTextFilter(e.target.value) }
              className="rounded w-11/12 py-1 px-2 bg-zinc-800"
            />
            <button
              onClick={() => setSearchBar(!searchBar) }
            >
              <MagnifyingGlassIconSolid
                className="w-8 cursor-pointer sm:w-11"
              />
            </button>
          </>
        ) : (
          <button
            onClick={() => setSearchBar(!searchBar) }
          >
            <MagnifyingGlassCircleIcon
              className="w-8 cursor-pointer sm:w-11"
            />
          </button>
        )
      }
    </div>
  )
}

export default SearchBar;