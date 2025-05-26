import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../services/api";

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
      {movie && <div> Response </div>}
    </div>
  );
}
