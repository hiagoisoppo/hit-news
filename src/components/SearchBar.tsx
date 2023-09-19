import { useNews } from "../contexts/NewsProvider";

function SearchBar () {
  const { filters, handleTextFilter } = useNews();

  return (
    <input
      type="text"
      placeholder="Digite o termo de busca"
      value={ filters.textFilter }
      onChange={ (e) => handleTextFilter(e.target.value) }
      className="rounded px-2 py-1 w-4/5"
    />
  )
}

export default SearchBar;