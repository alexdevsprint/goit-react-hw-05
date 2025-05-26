import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {	
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTRlN2M2NTRkODUwNjQwNzI4ZWUyMWY1Y2FlNjlkZiIsIm5iZiI6MTc0Nzg5OTMwOS43ODU5OTk4LCJzdWIiOiI2ODJlZDNhZGZiMmYxOGY3MmFhOGQxYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5bd-g6qdVyVM_YY61od8PQYF5ewjomShavKKH-Kp650'
  }
};

export const fetchTrendingMovies = async () => {
  const url = `/trending/movie/day?language=en-US`;
  return axios
    .get(url, options)
    .then((res) => res.data.results)
    .catch((err) => {
      console.error('Fetch error - Trending Movies:', err);
      return [];
    });
};


export const fetchMovieDetails = async (movieId) => {
  const url = `/movie/${movieId}`;
  return axios
    .get(url, options)
    .then((res) => res.data)
    .catch((err) => {
      console.error(`Fetch error - Movie Details ${movieId}:`, err);
      return null;
    });
};