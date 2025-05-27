import { useParams, NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieDetails } from "../../services/api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backlinkRef = useRef(location.state);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieDetails(movieId);

        setMovie(data);
      } catch {
        console.log("Fetch error!");
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details</h1>
      <Link to={backlinkRef.current}>Go back</Link>
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
