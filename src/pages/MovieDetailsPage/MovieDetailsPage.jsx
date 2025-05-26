import { useParams, NavLink, Outlet  } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieDetails(movieId);

        setMovie(data);
        console.log(data);
      } catch {
        console.log("Error");
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details</h1>
      {movie && <MovieInfo movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
