import EmphasisCard from "./components/EmphasisCard";
import Header from "./components/Header"
import Loading from "./components/Loading";
import NewsCard from "./components/NewsCard";
import { useNews } from "./contexts/NewsProvider"
import { NewsObject } from "./types";

function App() {
  const { isLoading, news, filters  } = useNews();

  return (
    <>
      <Header />
      <main
        className="mt-20 p-3 pt-5 bg-slate-300 min-h-screen flex justify-center items-start flex-wrap gap-6"
      >
        { isLoading ? (
            <Loading />
          ) : filters.typeFilter !== 'All' ? (
            news.slice(1, news.length).map((item: NewsObject, index) => <NewsCard key={ index } item={ item } />)
          ) : (
            <>
              {/* <EmphasisCard item={ news[0] } /> */}
              {news.slice(1, news.length).map((item: NewsObject, index) => <NewsCard key={ index } item={ item } />)}
            </>
          )
        }
      </main>
    </>
  )
}

export default App
