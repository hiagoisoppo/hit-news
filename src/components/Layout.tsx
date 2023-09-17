import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <header
        className="bg-zinc-900 p-3 flex justify-between items-center fixed top-0 left-0 right-0"
      >
        <h1
          className="text-green-500 text-xl font-bold"
        >
          HIT News
        </h1>
        <Navbar />
      </header>
      <main
        className="mt-14 p-3 bg-slate-100 min-h-screen"
      >
        <Outlet />
      </main>
    </>
  )
}

export default Layout;0