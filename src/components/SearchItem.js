import React from "react";
import "./searchItem.scss";
export function SearchItem({ item }) {
  const { Title, Poster, Year, Type } = item;

  return (
    <div>
      <div className="cellphone-container">
        <div className="movie">
          <div className="menu">
            <i className="material-icons"></i>
          </div>
          <div
            className="movie-img"
            style={{ backgroundImage: `url(${Poster})` }}
          ></div>
          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <h1>{Title}</h1>
                <ul className="movie-gen">
                  <li>{Year} /</li>
                  <li>{Type} </li>
                </ul>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">{/* <h5>SUMMARY</h5> */}</div>
              <div className="col2">
                <ul className="movie-likes">
                  <li>
                    <i className="material-icons">&#xE813;</i>124
                  </li>
                  <li>
                    <i className="material-icons">&#xE813;</i>3
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">
                  A group of elderly people are giving interviews
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
