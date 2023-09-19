import useLocalStorage from "../hooks/useLocalStorage";
import { NewsObject } from "../types";
import resolveData from "../utils/resolveData";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

function NewsCard({ item }: { item: NewsObject }) {
  const { favoriteNews, handleFavoriteNews } = useLocalStorage();

  return (
    <article
      className="bg-slate-300 rounded overflow-hidden shadow-lg w-96 h-96"
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
          className="font-bold p-3 text-center text-slate-900 text-base line-g"
        >
          { item.titulo }
        </h1>
      </a>

      <p
        className="text-sm text-slate-900 px-4 mb-3"
      >
        { item.introducao }
      </p>

      <div
        className="flex justify-between items-center p-3 text-sm text-slate-900 w-80 mx-auto
         border-t border-green-500"
      >
        <span>
          { resolveData(item.data_publicacao) }
        </span>

        <button
          onClick={() => handleFavoriteNews(item)}
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
      
    </article>
  )
}

export default NewsCard;