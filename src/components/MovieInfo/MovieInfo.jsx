import css from './MovieInfo.module.css'
export default function MovieInfo({ movie }) {
  return (
    <div className={css.movieInfoContainer}>
      <img className={css.movieInfoImg}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.movieInfoDesc}>
        <h2>{movie.title}</h2>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>        
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        
      </div>
    </div>
  );
}
