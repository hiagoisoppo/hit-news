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
      className="flex gap-3 p-2 bg-zinc-800 w-full justify-center
      sm:gap-6"
    >
      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center sm:text-lg sm:gap-1 hover:text-zinc-300 transition-all duration-300
          ${filters.typeFilter === "All" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => {
          handleTypeFilter("All");
          window.scrollTo(0, 0);
        }}
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
          `flex text-green-500 cursor-pointer text-xs items-center sm:text-lg sm:gap-1 hover:text-zinc-300 transition-all duration-300
          ${filters.typeFilter === "Notícia" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => {
          handleTypeFilter("Notícia");
          window.scrollTo(0, 0);
        }}
      >
        {
          filters.typeFilter === "Notícia" ? (
            <NewspaperIconSolid
              className="w-4 sm:w-6"
            />
          ) : (
            <NewspaperIcon
              className="w-4 sm:w-6"
            />
          )
        }
        <span>
          Notícias
        </span>
      </div>

      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center sm:text-lg sm:gap-1 hover:text-zinc-300 transition-all duration-300
          ${filters.typeFilter === "Release" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => {
          handleTypeFilter("Release");
          window.scrollTo(0, 0);
        }}
      >
        {
          filters.typeFilter === "Release" ? (
            <ChartPieIconSolid
              className="w-4 sm:w-6"
            />
          ) : (
            <ChartPieIcon
              className="w-4 sm:w-6"
            />
          )
        }
        <span>
          Releases
        </span>
      </div>

      <div
        className={
          `flex text-green-500 cursor-pointer text-xs items-center sm:text-lg sm:gap-1 hover:text-zinc-300 transition-all duration-300
          ${filters.typeFilter === "Favorite" ? 'font-bold' : 'font-light'}`
        }
        onClick={() => {
          handleTypeFilter("Favorite");
          window.scrollTo(0, 0);
        }}
      >
        {
          filters.typeFilter === "Favorite" ? (
            <HeartIconSolid
              className="w-4 sm:w-6"
            />
          ) : (
            <HeartIcon
              className="w-4 sm:w-6"
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