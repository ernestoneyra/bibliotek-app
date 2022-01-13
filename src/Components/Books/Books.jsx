import React, { useState } from "react";
import "./Books.css";

let Books = ({ books, genres }) => {
  const [showb, setShowb] = useState(false);

  const mappedBooks = () => {
    return books.map(({ attributes }, i) => {
      let { author, genres, pages, rating, title } = attributes;
      let genre = genres.data;
     /*  console.log("books genre", genre); */
      return (
        <div key={i} className="booksName">
          <span>
            <strong>Titel: </strong> {title}
          </span>
          <div>
            {`Författare: ${author}`} <br />
            {`Sidor: ${pages}`}
            <br />
            {`Betyg: ${rating}`}
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
          </div>
          <br />
        </div>
      );
    });
  };

/*   const mappedGenres = () => {
    return genres.map(({attributes, id}) => {
      let {genre, books} = attributes;
      let book = books.data;

    })
  }

console.log("genres", genres) */

  

  return (
    <>
      <h1>Böcker</h1>
      <button
        className="btn primary-btn highlighted-btn"
        onClick={() => {
          setShowb(!showb);
        }}
      >
        {showb ? "Dölj böcker" : "Visa böcker"}
      </button>
     
      {showb && (
        <div>
       
      
          <div className="mapped">{mappedBooks()}</div>
    
        
        </div>
      )}
    </>
  );
};

export default Books;
