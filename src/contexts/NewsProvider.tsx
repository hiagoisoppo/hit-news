import { createContext, useContext } from "react";
import { NewsObject } from "../types";
import useFilters from "../hooks/useFilters";
import useLocalStorage from "../hooks/useLocalStorage";

interface NewsContextData {
  isLoading: boolean;
  news: NewsObject[];
  filters: {
    textFilter: string;
    typeFilter: 'Release' | 'Notícia' | 'Favorite';
  };
  handleTextFilter: (text: string) => void;
  handleTypeFilter: (type: 'Release' | 'Notícia' | 'Favorite') => void;
  handleFavoriteNews: () => void;
}

const NewsContext = createContext<NewsContextData>({} as NewsContextData);

function NewsProvider({ children }: { children: React.ReactNode }) {
  const { filters, handleTextFilter, handleTypeFilter, isLoading, news } = useFilters();
  const { handleFavoriteNews } = useLocalStorage();

  return (
    <NewsContext.Provider
      value={
        {
          news,
          filters,
          isLoading,
          handleTextFilter,
          handleTypeFilter,
          handleFavoriteNews
        }
      }
    >
      { children }
    </NewsContext.Provider>
  )
}

const useNews = () => useContext(NewsContext);

export { NewsProvider, useNews };