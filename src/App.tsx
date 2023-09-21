import { useEffect, useState } from "react";
import Header from "./components/Header"
import Loading from "./components/Loading";
import NewsCard from "./components/NewsCard";
import { useNews } from "./contexts/NewsProvider"
import { NewsObject } from "./types";
import { ArrowPathIcon, PlusIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import Footer from "./components/Footer";

function App() {
  const { isLoading, news } = useNews();
  const [newsDisplayLimit, setNewsDisplayLimit] = useState(8);
  const [goTopBtn, setGoTopBtn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
       if (window.scrollY > 500) {
         setGoTopBtn(true);
       } else {
          setGoTopBtn(false);
       }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main
        className="mt-20 p-3 pt-5 bg-slate-300 min-h-screen flex justify-center items-start flex-wrap gap-6
        sm:mt-24"
      >
        { isLoading ? (
              [0,1,2,3,4,5,6,7].map((num) => <Loading key={ num } />)
          ) : (
            news.slice(0, newsDisplayLimit).map((item: NewsObject, index) => <NewsCard key={ index } item={ item } />)
          )
        }

        <div className="w-full flex justify-center items-center">
          { newsDisplayLimit < news.length ? (
              <button
              className="bg-green-500 text-white py-3 px-4 rounded-md font-bold flex justify-center items-center gap-2
              hover:bg-green-600 transition-all duration-300"
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
                className="bg-green-500 text-white py-3 px-4 rounded-md font-bold flex justify-center items-center gap-2
                hover:bg-green-600 transition-all duration-300"
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
      { goTopBtn && (
        <button
          className="fixed bg-green-500 rounded-lg bottom-0 right-0 mr-1 mb-1 p-2 shadow-md opacity-60
          hover:opacity-100 transition-all duration-300"
          onClick={ (e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
            setNewsDisplayLimit(8);
          } }
        >
          <ArrowUpIcon className="w-5 text-zinc-900"/>
        </button>
      )}
      <Footer />
    </>
  )
}

export default App;