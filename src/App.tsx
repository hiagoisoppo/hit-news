import { useState } from "react";
import EmphasisCard from "./components/EmphasisCard";
import Header from "./components/Header"
import Loading from "./components/Loading";
import NewsCard from "./components/NewsCard";
import { useNews } from "./contexts/NewsProvider"
import { NewsObject } from "./types";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline";
import Footer from "./components/Footer";

function App() {
  const { isLoading, news, filters  } = useNews();
  const [newsDisplayLimit, setNewsDisplayLimit] = useState(8);

  return (
    <>
      <Header />
      <main
        className="mt-20 p-3 pt-5 bg-slate-300 min-h-screen flex justify-center items-start flex-wrap gap-6"
      >
        { isLoading ? (
              [0,1,2,3,4,5,6,7].map((num) => <Loading key={ num } />)
          ) : filters.typeFilter !== 'All' ? (
            news.slice(0, newsDisplayLimit).map((item: NewsObject, index) => <NewsCard key={ index } item={ item } />)
          ) : (
            <>
              <EmphasisCard item={ news[0] } />
              {news.slice(1, newsDisplayLimit+1).map((item: NewsObject, index) => <NewsCard key={ index } item={ item } />)}
            </>
          )
        }

        <div className="w-full flex justify-center items-center">
          { newsDisplayLimit < news.length ? (
              <button
              className="bg-green-500 text-white py-3 px-4 rounded-md font-bold flex justify-center items-center gap-2"
              onClick={ (e) => {
                  e.preventDefault();
                  setNewsDisplayLimit(newsDisplayLimit + 8);
                }}
              >
                <PlusIcon className="w-6" />
                Ver mais notícias
              </button>
            ) : (
              <button
                className="bg-green-500 text-white py-3 px-4 rounded-md font-bold flex justify-center items-center gap-2"
                onClick={ (e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  setNewsDisplayLimit(8);
                }}
              >
                <ArrowPathIcon className="w-6" />
                Acabaram as notícias
              </button>
            )
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
