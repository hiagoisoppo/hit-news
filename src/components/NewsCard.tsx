import { useState } from "react";
import { useNews } from "../contexts/NewsProvider";
import { NewsObject } from "../types";
import resolveData from "../utils/resolveData";

import { CursorArrowRaysIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid, LinkIcon } from "@heroicons/react/24/solid";

function NewsCard({ item }: { item: NewsObject }) {
  const { favoriteNews, handleFavoriteNews } = useNews();
  const [copyAlert, setCopyAlert] = useState(false);
  return (
    <article
      className="bg-slate-300 rounded-lg shadow-lg w-96 overflow-hidden flex flex-col
      sm:w-72 md:w-80 lg:w-96"
    >
      <a
        href={ item.link }
        target="_blank"
      >
        <img
          src={ item.imagens }
          alt={ item.imagens }
          className="w-full h-36 object-cover"
        />
        <h1
          className="font-bold p-3 text-center text-slate-900 h-16 overflow-hidden hover:text-green-500 transition-all duration-300"
        >
          { item.titulo }
        </h1>
      </a>
      <p
        className="text-sm text-slate-900 px-4 mb-3 h-20 overflow-hidden"
      >
        { item.introducao }
      </p>
      <div
        className="flex justify-between items-center py-3 text-sm text-slate-900 w-11/12 mx-auto border-t border-green-500"
      >
        <span>
          { resolveData(item.data_publicacao) === '0' ? 'Hoje' : resolveData(item.data_publicacao) === '1' ? 'Ontem' : `${resolveData(item.data_publicacao)} dias atrás` }
        </span>
        <div
          className="flex gap-3"
        >
          { copyAlert && <span className="text-green-500">Link copiado!</span> }
          <button
            onClick={() => {
              window.navigator.clipboard.writeText(item.link);
              setCopyAlert(!copyAlert);
            }}
            className="text-green-500 hover:text-zinc-900 transition-all duration-300"
          >
            <LinkIcon className="w-5"/>
          </button>
          <button
            onClick={() => handleFavoriteNews(item)}
            className="text-green-500 hover:text-zinc-900 transition-all duration-300"
          >
            {
              favoriteNews.some(({ id }: NewsObject) => id === item.id) ? (
                <HeartIconSolid className="w-5"/>
              ) : (
                <HeartIcon className="w-5"/>
              )
            }
          </button>
        </div>
      </div>
      <a
        href={ item.link }
        target="_blank"
        className="bg-zinc-900 text-green-500 font-bold text-sm shadow-md text-center px-5 py-2 w-full
        flex justify-center items-center gap-2 hover:text-zinc-300 transition-all duration-300"
      >
        Leia a notícia completa aqui
        <CursorArrowRaysIcon className="w-5"/>
      </a>
    </article>
  )
}

export default NewsCard;