import { HeartIcon, NewspaperIcon, ChartPieIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  ChartPieIcon as ChartPieIconSolid,
  Squares2X2Icon as Squares2X2IconSolid } from "@heroicons/react/24/solid";
import { useNews } from "../contexts/NewsProvider";

function Navbar() {
  const { filters, handleTypeFilter } = useNews();

  return (
    <nav
      className="flex gap-3 p-2 bg-zinc-800 w-full justify-center"
    >
      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center 
          ${filters.typeFilter === "All" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("All")}
      >
        {
          filters.typeFilter === "All" ? (
            <Squares2X2IconSolid
              className="w-4"
            />
          ) : (
            <Squares2X2Icon
              className="w-4"
            />
          )
        }
        <span>
          Recentes
        </span>
      </div>

      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center 
          ${filters.typeFilter === "Notícia" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("Notícia")}
      >
        {
          filters.typeFilter === "Notícia" ? (
            <NewspaperIconSolid
              className="w-4"
            />
          ) : (
            <NewspaperIcon
              className="w-4"
            />
          )
        }
        <span>
          Notícias
        </span>
      </div>

      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center 
          ${filters.typeFilter === "Release" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("Release")}
      >
        {
          filters.typeFilter === "Release" ? (
            <ChartPieIconSolid
              className="w-4"
            />
          ) : (
            <ChartPieIcon
              className="w-4"
            />
          )
        }
        <span>
          Releases
        </span>
      </div>

      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center 
          ${filters.typeFilter === "Favorite" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => handleTypeFilter("Favorite")}
      >
        {
          filters.typeFilter === "Favorite" ? (
            <HeartIconSolid
              className="w-4"
            />
          ) : (
            <HeartIcon
              className="w-4"
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