import { HeartIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid,
  NewspaperIcon as NewspaperIconSolid } from "@heroicons/react/24/solid";
import { useNews } from "../contexts/NewsProvider";

function Navbar() {
  const { filters, handleTypeFilter } = useNews();

  return (
    <nav
      className="flex gap-8 p-2 bg-zinc-800 w-full justify-center"
    >
      <div
        className={
          `flex text-green-500 gap-1 cursor-pointer 
          ${filters.typeFilter === "Notícia" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("Notícia")}
      >
        {
          filters.typeFilter === "Notícia" ? (
            <NewspaperIconSolid
              className="w-5"
            />
          ) : (
            <NewspaperIcon
              className="w-5"
            />
          )
        }
        <span>
          Notícias
        </span>
      </div>

      <div
        className={
          `flex text-green-500 gap-1 cursor-pointer 
          ${filters.typeFilter === "Release" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("Release")}
      >
        {
          filters.typeFilter === "Release" ? (
            <NewspaperIconSolid
              className="w-5"
            />
          ) : (
            <NewspaperIcon
              className="w-5"
            />
          )
        }
        <span>
          Releases
        </span>
      </div>

      <div
        className={
          `flex text-green-500 gap-1 cursor-pointer 
          ${filters.typeFilter === "Favorite" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("Favorite")}
      >
        {
          filters.typeFilter === "Favorite" ? (
            <HeartIconSolid
              className="w-5"
            />
          ) : (
            <HeartIcon
              className="w-5"
            />
          )
        }
        <span>
          Favoritos
        </span>
      </div>
    </nav>
  )
}

export default Navbar;