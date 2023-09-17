import { HeartIcon, NewspaperIcon, HomeIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className="flex gap-2"
    >
      {
        pathname === "/" ? (
        <HomeIconSolid
          className="text-green-500 w-8 cursor-pointer"
          onClick={() => navigate("/")}
        />
        ) : (
        <HomeIcon
          className="text-green-500 w-8 cursor-pointer"
          onClick={() => navigate("/")}
        />
        )
      }

      {
        pathname === "/releases" ? (
        <NewspaperIconSolid
          className="text-green-500 w-8 cursor-pointer"
          onClick={() => navigate("/releases")}
        />
        ) : (
        <NewspaperIcon
          className="text-green-500 w-8 cursor-pointer"
          onClick={() => navigate("/releases")}
        />
        )
      }

      {
        pathname === "/favorites" ? (
        <HeartIconSolid
          className="text-green-500 w-8 cursor-pointer"
          onClick={() => navigate("/favorites")}
        />
        ) : (
        <HeartIcon
          className="text-green-500 w-8 cursor-pointer"
          onClick={() => navigate("/favorites")}
        />
        )
      }
    </nav>
  )
}

export default Navbar;