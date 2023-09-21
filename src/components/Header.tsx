import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Header(){
  return (
      <header
        className="bg-zinc-900 flex flex-col justify-center items-center fixed top-0 left-0 right-0"
      >
        <div
          className="flex items-center p-2 w-full justify-between"
        >
          <h1
            className="text-green-500 text-xl font-bold w-1/3
            sm:text-3xl md:text-4xl"
          >
            HIT News
          </h1>
          <SearchBar />
        </div>
        <Navbar />
      </header>
  )
}

export default Header;