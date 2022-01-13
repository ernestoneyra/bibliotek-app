import "./App.css";
import React, { useState, useEffect } from "react";
import AudioBooks from "./Components/Audio books/AudioBooks";
import Books from "./Components/Books/Books";

function App() {
  const [books, setBooks] = useState([]);
  const [audioBooks, setAudioBooks] = useState([]);
  const [genres, setGenres] = useState([])

  ///////FETCH API////////
  let getBooks = async () => {
    let res = await fetch("http://localhost:1337/api/books?populate=*");
    let json = await res.json();
    setBooks(json.data);
  };

  let getAudioBook = async () => {
    let res = await fetch("http://localhost:1337/api/sound-books?populate=*");
    let json = await res.json();
    setAudioBooks(json.data);
  };

  let getGenres = async () => {
    let res = await fetch("http://localhost:1337/api/genres?populate=*")
    let json = await res.json()
    setGenres(json.data)
  }

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getAudioBook();
  }, []);

  useEffect(() => {
    getGenres()
  }, [])

  ////////////////////////

   

  /*  console.log("books", books.attributes) */
  /* console.log("audiobooks", audioBooks) */

  /* Anrop mot genre api endpoint. 
      välj först böcker och sedan genre. om man väljer ljudböcker ska alla ljudböcker visas. ingen sortering på genre. */
  return (
    <div className="App">
      <header className="App-header">Sök efter böcker!</header>
      <main className="main">
        <div  className="books">
          <Books books={books} genres={genres}/>
        </div>
        <div>
          <AudioBooks audioBooks={audioBooks} genres={genres}/>
        </div>
      </main>
    </div>
  );
}

export default App;
