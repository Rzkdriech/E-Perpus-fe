import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../lib/axios.js";


export const Books = () => {
  const [books, setBooks] = useState([]);


  const fetchBooks = async () => {
    try {
      const res = await axiosInstance.get("/relCategories");
      setBooks(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">List Books</h1>
      <div className="books grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div className="book border border-gray-200 rounded-lg p-4 mb-8" key={book.BukuID}>
            {book.buku.Cover && <img src={book.buku.Cover} alt="gambar" className="mb-2 rounded-lg" />}
            <h2 className="text-lg font-semiboldi text-center">{book.buku.Judul}</h2>
            <p className="text-sm text-gray-600 text-center">{book.kategoribuku.NamaKategori}</p>
            <p className="text-sm text-center">{book.buku.Penulis}</p>
            <p className="text-sm text-center">{book.buku.Penerbit}</p>
            <p className="text-sm text-center">{book.buku.TahunTerbit}</p>
          </div>
        ))}

      </div>
    </div>
  );
};
