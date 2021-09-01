import React from "react";
import "../style/MovieDetalis.css";
function Index({ MovieInfo }) {
  const { Actors, Title, Plot, Year, Poster, Genre } = MovieInfo;

  const { Country, Language, Awards, imdbRating, imdbVotes } = MovieInfo;
  return (
    <div>
      <div id="card_container" data-offset="2">
        <div className="pg">
          <img src={Poster} />
        </div>
        <div id="card">
          <div className="shine"></div>
          <div className="text-block">
            <h1 className="MovieTitle">
              {Title} <small>{Year}</small>
            </h1>
            <p>{Genre}</p>
            <p>{Plot}</p>
            <div className="InfoText">
              <span>Actors</span>
              {Actors}
            </div>
            <div className="InfoText">
              <div>
                <span>Language : </span>
                {Language}
              </div>
              <div>
                <span>Country : </span>
                {Country}
              </div>
              <div>
                <span>Votes : </span>
                {imdbVotes}
              </div>
              <div>
                <span>Awards : </span>
                {Awards}
              </div>
              <div>
                <span>Rating:</span>
                {imdbRating}
              </div>
            </div>
            <button>Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
