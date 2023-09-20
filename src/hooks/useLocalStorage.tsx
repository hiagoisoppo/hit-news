import { useEffect, useState } from "react";
import { NewsObject } from "../types";

interface UseLocalStorageReturn {
  favoriteNews: NewsObject[];
  handleFavoriteNews: (item: NewsObject) => void;
}

function useLocalStorage(): UseLocalStorageReturn {
  const [favoriteNews, setFavoriteNews] = useState<NewsObject[]>(() => {
    const favoriteData = localStorage.getItem('favoriteNews');
    return favoriteData ? JSON.parse(favoriteData) : [];
  });

  const handleFavoriteNews = (item: NewsObject) => {
    if (favoriteNews.some(({ id }: NewsObject) => id === item.id)) {
      const newFavoriteNews = favoriteNews.filter(({ id }: NewsObject) => id !== item.id);
      const sortFavoriteNews = newFavoriteNews.sort((a, b) => b.id - a.id);
      setFavoriteNews(sortFavoriteNews);
    } else {
      const newFavoriteNews = [...favoriteNews, item];
      const sortFavoriteNews = newFavoriteNews.sort((a, b) => b.id - a.id);
      setFavoriteNews(sortFavoriteNews);
    }
  };

  useEffect(() => {
    localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
  }, [favoriteNews]);

  return {
    favoriteNews,
    handleFavoriteNews,
  }
}

export default useLocalStorage;