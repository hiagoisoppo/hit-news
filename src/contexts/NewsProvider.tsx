import { createContext, useContext } from "react";
import { NewsObject } from "../types";
import useFilters from "../hooks/useFilters";

interface NewsContextData {
  isLoading: boolean;
  news: NewsObject[];
  filters: {
    textFilter: string;
    typeFilter: 'Release' | 'Notícia' | 'Favorite' | 'All';
  };
  handleTextFilter: (text: string) => void;
  handleTypeFilter: (type: 'Release' | 'Notícia' | 'Favorite' | 'All') => void;
  handleFavoriteNews: (item: NewsObject) => void;
  favoriteNews: NewsObject[];
}

const NewsContext = createContext<NewsContextData>({} as NewsContextData);

function NewsProvider({ children }: { children: React.ReactNode }) {
  const { filters, handleTextFilter, handleTypeFilter, isLoading, news, favoriteNews, handleFavoriteNews } = useFilters();

  return (
    <NewsContext.Provider
      value={
        {
          news,
          filters,
          isLoading,
          handleTextFilter,
          handleTypeFilter,
          handleFavoriteNews,
          favoriteNews,
        }
      }
    >
      { children }
    </NewsContext.Provider>
  )
}

const useNews = () => useContext(NewsContext);

export { NewsProvider, useNews };