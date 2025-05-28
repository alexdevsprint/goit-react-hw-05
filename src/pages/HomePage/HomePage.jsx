import css from "./HomePage.module.css"
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div >
      
        <h1 className={css.title}>Trending Movies</h1>
        <MovieList movies={movies} />
      
    </div>
  );
}
