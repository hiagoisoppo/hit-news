import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { NewsObject } from "../types";
import useLocalStorage from "./useLocalStorage";

interface UseFiltersReturn {
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

function useFilters(): UseFiltersReturn {
  const { favoriteNews, handleFavoriteNews } = useLocalStorage();
  const { data, isLoading } = useFetch();
  const [news, setNews] = useState<NewsObject[]>(data);
  const [filters, setFilters] = useState<{
    textFilter: string;
    typeFilter: 'Release' | 'Notícia' | 'Favorite' | 'All';
  }>({
    textFilter: '',
    typeFilter: 'All'
  });

  const handleTextFilter = (text: string) => {
    setFilters({
      ...filters,
      textFilter: text
    });
  };

  const handleTypeFilter = (type: 'Release' | 'Notícia' | 'Favorite' | 'All') => {
    setFilters({
      ...filters,
      typeFilter: type
    });
  };

  useEffect(() => {
    if (filters.typeFilter === 'Favorite') {
      const filterText = favoriteNews.filter(({ titulo, introducao }: NewsObject) => {
        const titleFilter = titulo.toLowerCase().includes(filters.textFilter.toLowerCase());
        const introductionFilter = introducao.toLowerCase().includes(filters.textFilter.toLowerCase());
        return titleFilter || introductionFilter;
      });
      setNews(filterText);
    } else if (filters.typeFilter === 'All') {
      const filterText = data.filter(({ titulo, introducao }: NewsObject) => {
        const titleFilter = titulo.toLowerCase().includes(filters.textFilter.toLowerCase());
        const introductionFilter = introducao.toLowerCase().includes(filters.textFilter.toLowerCase());
        return titleFilter || introductionFilter;
      });
      setNews(filterText);
    } else {
      const filterType = data.filter(({ tipo }: NewsObject) => {
        return tipo === filters.typeFilter;
      });
      const filterText = filterType.filter(({ titulo, introducao }: NewsObject) => {
        const titleFilter = titulo.toLowerCase().includes(filters.textFilter.toLowerCase());
        const introductionFilter = introducao.toLowerCase().includes(filters.textFilter.toLowerCase());
        return titleFilter || introductionFilter;
      });
      setNews(filterText);
    }
  }, [filters, data, favoriteNews])

  return {
    isLoading,
    news,
    filters,
    handleTextFilter,
    handleTypeFilter,
    handleFavoriteNews,
    favoriteNews,
  }
}

export default useFilters;