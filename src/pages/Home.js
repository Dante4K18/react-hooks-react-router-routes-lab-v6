import MovieCard from '../components/MovieCard';

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
