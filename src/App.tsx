import Header from "./components/Header"
import { useNews } from "./contexts/NewsProvider"

function App() {
  const { filters } = useNews();

  return (
    <>
      <Header />
      <main
        className="mt-24 p-4 pt-6 bg-slate-300 min-h-screen"
      >
        <h1>{filters.typeFilter}</h1>
      </main>
    </>
  )
}

export default App
