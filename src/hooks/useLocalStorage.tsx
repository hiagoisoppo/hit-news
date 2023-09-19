import { useEffect, useState } from "react";
import { NewsObject } from "../types";

interface UseLocalStorageReturn {
  favoriteNews: NewsObject[];
  handleFavoriteNews: () => void;
}

function useLocalStorage(): UseLocalStorageReturn {
  const [favoriteNews, setFavoriteNews] = useState<NewsObject[]>(() => {
    const favoriteData = localStorage.getItem('favoriteNews');
    return favoriteData ? JSON.parse(favoriteData) : [];
  });

  const handleFavoriteNews = (
    
  ) => {};

  useEffect(() => {
    localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
  });

  return {
    favoriteNews,
    handleFavoriteNews,
  }
}

export default useLocalStorage;