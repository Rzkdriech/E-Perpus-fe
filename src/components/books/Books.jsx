import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../lib/axios.js";


export const Books = () => {
  const [books, setBooks] = useState([]);


  const fetchBooks = async () => {
    try {
      const res = await axiosInstance.get("/books");
      setBooks(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Bookz</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.BukuID}>
            {book.Cover && <img src={book.Cover} alt="gambar" />}
            <h2>{book.Judul}</h2>
            <p>{book.Penulis}</p>
            <p>{book.Penerbit}</p>
            <p>{book.TahunTerbit}</p>
          </div>
        ))}

      </div>
    </div>
  );
};
