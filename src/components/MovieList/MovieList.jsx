import { Link, useLocation } from "react-router-dom";
import css from"./MovieList.module.css"

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={ location }>
            {title}
          </Link>
        </li>
      ))}
    </ul>
    </div>
    
  );
}
