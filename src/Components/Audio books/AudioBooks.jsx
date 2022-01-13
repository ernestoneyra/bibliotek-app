import React, { useState } from "react";
import "./AudioBooks.css";

const AudioBooks = ({ audioBooks, genres }) => {
  const [showab, setShowab] = useState(false);

  const mappedAudioBooks = () => {
    return audioBooks.map(({ attributes }, i) => {
      let { title, genres, lengthHour, lengthMin, rating, releaseDate } =
        attributes;
      let genre = genres.data;

      return (
        <div key={i} >
          <span>
            <strong>Titel: </strong>
            {title}
          </span>
          <div className="booksName">
            {`Längd: ${lengthHour} h ${lengthMin} min`} <br />
            {`Betyg: ${rating}`} <br />
            {`Utgivningsdatum: ${releaseDate}`}
            <div>
              Genre:{" "}
              {genre.map((gen, id) => {
                return (
                  <span key={id}>
                    <span>{`${gen.attributes.genre}`} </span>
                  </span>
                );
              })}
            </div>
          </div>{" "}
          <br />
        </div>
      );
    });
  };

  return (
    <>
      <h1>Ljudböcker</h1>
      <button
        className="btn2 primary-btn2 highlighted-btn2"
        onClick={() => {
          setShowab(!showab);
        }}
      >
        {showab ? "Dölj ljudböcker" : "Visa ljudböcker"}
      </button>
  {/*     <button className="btn2 primary-btn2 highlighted-btn2">Välj genre</button> */}
      
      {showab && (
        <>
          <div className="mapped">{mappedAudioBooks()}</div>
        </>
      )}
      
    </>
  );
};

export default AudioBooks;
