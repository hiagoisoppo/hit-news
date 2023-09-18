import { HeartIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid,
  NewspaperIcon as NewspaperIconSolid } from "@heroicons/react/24/solid";
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
        <NewspaperIconSolid
          className="text-green-500 w-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        ) : (
        <NewspaperIcon
          className="text-green-500 w-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        )
      }

      {
        pathname === "/favorites" ? (
        <HeartIconSolid
          className="text-green-500 w-6 cursor-pointer"
          onClick={() => navigate("/favorites")}
        />
        ) : (
        <HeartIcon
          className="text-green-500 w-6 cursor-pointer"
          onClick={() => navigate("/favorites")}
        />
        )
      }
    </nav>
  )
}

export default Navbar;