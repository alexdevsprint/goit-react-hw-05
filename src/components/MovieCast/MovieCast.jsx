import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png';



  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch {
        console.log('Fetch error!')
      }
    };
    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : defaultImg
            }
            alt={name}
            width="50"
          />
          <h3>
            {name}
          </h3>
          <p>
            Character: {character}
          </p>
        </li>
      ))}
    </ul>
  );
}
