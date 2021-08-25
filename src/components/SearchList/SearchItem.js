import React from "react";
import "./searchItem.scss";
export function SearchItem({ item, onAdd, DisableID }) {
  const { Title, Poster, Year, Type, imdbID } = item;
  return (
    <div>
      <div className="card-container">
        <div className="movie">
          <div className="menu">
            <i className="plsIcon" onClick={onAdd}>
              {DisableID === imdbID ? "" : "+"}
            </i>
          </div>
          <div
            className="movie-img"
            style={{ backgroundImage: `url(${Poster})` }}
          ></div>
          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <h1 className="card-title">{Title}</h1>
                <ul className="movie-gen">
                  <li>{Year} /</li>
                  <li>{Type} </li>
                </ul>
              </div>
            </div>
            <ul className="movie-likes">
              <li>
                <i className="material-icons">⭐ ⭐ ⭐</i>124
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
