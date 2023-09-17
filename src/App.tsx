import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import News from "./pages/News"
import Releases from "./pages/Releases"
import Favorites from "./pages/Favorites"

function App() {

  return (
    <Routes>
      <Route path="/" Component={ Layout }>
          <Route index Component={ News }/>
          <Route path="/releases" Component={ Releases }/>
          <Route path="/favorites" Component={ Favorites }/>
      </Route>
    </Routes>
  )
}

export default App
