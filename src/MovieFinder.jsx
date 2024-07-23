import { useState } from "react";
import MovieCard from "./MovieCard"; // Importa el nuevo componente

export const MovieFinder = () => {
  const URL_BASE = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "aac6aa325cdfe2524fc6f058c4482964";
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${URL_BASE}?query=${search}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results); // Asegúrate de acceder a `data.results`
    } catch (error) {
      console.log("Ha ocurrido un error: ", error);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <>
      <header className="__movie-finder-container container p-0 m-0">
        <div className="row p-0 m-0">
          <div className="__movie-finder container d-md-flex flex-md-row p-0 m-0">
            <h1 className="col text-center text-md-end text-white mb-1 mt-3 my-md-auto mx-md-1 p-md-0">
              Movie Finder
            </h1>
            <form
              className="col d-flex justify-content-center justify-content-md-start mx-0 px-0 mb-3 mt-1 my-md-1 mx-md-1 py-md-1"
              onSubmit={handleSubmit}
            >
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control rounded-2 rounded-end-0 py-1"
                  placeholder="Toy Story..."
                  value={search}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex">
                <button
                  type="submit"
                  className="btn btn-inline-block rounded-2 rounded-start-0 py-1"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
