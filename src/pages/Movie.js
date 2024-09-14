import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data by ID
    fetch(`/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.genres.map((genre, idx) => (
        <span key={idx}>{genre}</span>
      ))}
    </div>
  );
};

export default Movie;
