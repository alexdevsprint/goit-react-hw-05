import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieSearch } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = async (newQuery) => {
    setQuery(newQuery);
    
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getMovieSearch() {
      try {
        const data = await fetchMovieSearch(query);
        setMovies(data);
      } catch {
        console.log('error')
      } finally {
      }
    }

    getMovieSearch();
  }, [query]);

  return (
    <div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
