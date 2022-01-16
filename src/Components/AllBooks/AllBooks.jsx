import React, { useState } from "react";
import "../../App.css";
import "./AllBook.css";

const AllBooks = ({ books, audioBooks }) => {
  const [showBooks, setShowBooks] = useState(false);
  const [showAudioBooks, setShowAudioBooks] = useState(false);

  /*  console.log("books", books);
  console.log("audiobooks", audioBooks); */

  let mappedBooks = () => {
    return books.map(({ attributes }, i) => {
      let { genres, title, pages, rating, author } = attributes;
      let genreB = genres.data;
      /*   console.log("genreB", genreB); */
      return (
        <div key={i} className="booksName">
          <ul>
            {`Titel: ${title}`}
            <br />
            {`Författare: ${author}`} <br />
            {`Sidor: ${pages}`} <br />
            <span>
              Genre: {""}
              {genreB.map((genAB) => {
                return <span>{` ${genAB.attributes.genre}`}</span>;
              })}
              <br />
            </span>
            {`Betyg: ${rating}`}
          </ul>
        </div>
      );
    });
  };

  let mappedAudioBooks = () => {
    return audioBooks.map(({ attributes }, index) => {
      let { genres, lengthHour, lengthMin, title, rating, releaseDate } =
        attributes;
      let genreAB = genres.data;
      console.log("genreAB", genreAB);
      return (
        <div key={index}>
          <ul>
            {`Titel: ${title}`} <br />
            {`Utgivningsår: ${releaseDate}`}
            <br />
            {`Längd: ${lengthHour}h ${lengthMin}min`}
            <br />
            <span>
              Genre: {""}
              {genreAB.map((genAB) => {
                return <span>{` ${genAB.attributes.genre}`}</span>;
              })}
              <br />
            </span>
            {`Betyg: ${rating}`}
          </ul>
        </div>
      );
    });
  };

  const onClickShowBooks = () => {
    setShowBooks(!showBooks);
    setShowAudioBooks(false);
  };

  const onClickShowAudioBooks = () => {
    setShowAudioBooks(!showAudioBooks);
    setShowBooks(false);
  };

  return (
    <>
      <main className="main">
        {/* BOOKS */}
        <div>
          <button
            className="btn primary-btn highlighted-btn"
            onClick={onClickShowBooks}
          >
            {showBooks ? "Dölj böcker" : "Visa Böcker"}
          </button>
          {showBooks && <div className="mapped">{mappedBooks()}</div>}
        </div>

        {/* AUDIOBOOKS */}
        <div>
          <button
            className="btn2 primary-btn2 highlighted-btn2"
            onClick={onClickShowAudioBooks}
          >
            {showAudioBooks ? "Dölj ljudöcker" : "Visa ljudböcker"}
          </button>
          {showAudioBooks ? <div>{mappedAudioBooks()}</div> : null}
        </div>
      </main>
    </>
  );
};

export default AllBooks;
