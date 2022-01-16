import React, { useState } from "react";
import "../../App.css";
import "./AllBook.css";

const AllBooks = ({ books, audioBooks }) => {
  const [showBooks, setShowBooks] = useState(true);
  const [showAudioBooks, setShowAudioBooks] = useState(false);

  /*  console.log("books", books);
  console.log("audiobooks", audioBooks); */

  let mappedBooks = () => {
    return books.map(({ attributes }, i) => {
      let { genres, title, pages, rating, author } = attributes;
      let genreB = genres.data;
      /*   console.log("genreB", genreB); */
      return (
        <div key={i} className="booksName child">
          <ul className="">
            <div className="">
              <span><strong>{` ${title}`}</strong></span>
              <br />
              <span>
                {`Författare: ${author}`} <br />
              </span>
              <span>
                {`Sidor: ${pages}`} <br />
              </span>
              <span>
                Genre: {""}
                {genreB.map((genAB) => {
                  return <span>{` ${genAB.attributes.genre}`}</span>;
                })}
                <br />
              </span>
              {`Betyg: ${rating}`}<br/>
            </div>
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
        <div key={index} className="booksName  child">
          <ul>
            <div className="">
              <span><strong>{`${title}`}</strong></span> <br />
              <span>{`Utgivningsår: ${releaseDate}`}</span> <br />
              <span>{`Längd: ${lengthHour}h ${lengthMin}min`}</span>
              <br />
              <span>
                Genre: {""}
                {genreAB.map((genAB) => {
                  return <span>{` ${genAB.attributes.genre}`}</span>;
                })}
                <br />
              </span>
              <span>{`Betyg: ${rating}`}</span>
            </div>
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
      <main className="small">
        
          {/* BOOKS */}
          <div>
            <button
              className="btn primary-btn highlighted-btn right"
              onClick={onClickShowBooks}
            >
              {showBooks ? "Dölj böcker" : "Visa Böcker"}
            </button>
            <button
              className="btn2 primary-btn2 highlighted-btn2"
              onClick={onClickShowAudioBooks}
            >
              {showAudioBooks ? "Dölj ljudöcker" : "Visa ljudböcker"}
            </button>
            <div className=" ">
            {showBooks && <div className="mapped  parent">{mappedBooks()}</div>}
          </div>
        </div>
        
          {/* AUDIOBOOKS */}
          <div>
            
            <div className=" ">
            {showAudioBooks && <div className="mapped  parent">{mappedAudioBooks()}</div>}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllBooks;
