import Header from "./components/Header"
import Loading from "./components/Loading";
import { useNews } from "./contexts/NewsProvider"
import { NewsObject } from "./types";

function App() {
  const { isLoading, news } = useNews();

  return (
    <>
      <Header />
      <main
        className="mt-20 p-3 pt-5 bg-slate-300 min-h-screen flex justify-center items-start"
      >
        { isLoading ? (
            <Loading />
          ) : (
            news.map ( (item: NewsObject, index) => {
              return <h1 key={ index } >{item.titulo}</h1>
            })
          )
        }
      </main>
    </>
  )
}

export default App
