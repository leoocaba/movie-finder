import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="__card card h-100">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top img-fluid __custom-card-img"
        alt={movie.title}
      />
      <div className="card-body p-4">
        <h5 className="card-title text-start fs-3 fw-bold">{movie.title}</h5>
        <p
          className={
            isTruncated
              ? "card-text __truncated-text text-start"
              : "card-text text-start"
          }
        >
          {movie.overview}
        </p>
        <div className="d-flex justify-content-between">
          <p className="card-text text-light my-auto mr-auto">Released:
            <small className="text-body-primary m-auto p-auto px-1">
              { movie.release_date }
            </small>
          </p>
          <a
            type="button"
            onClick={toggleTruncate}
            className="btn btn-link btn-md py-2 px-0 my-auto"
          >
            {isTruncated ? "Ver más" : "Ver menos"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
