import React, { useState } from 'react'
import { Books } from '../../components/books/Books.jsx'
import { Navbar } from '../../components/navbar/Navbar.jsx'
export const Home = () => {
  return (
  <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Books />
      </div>
    </div> 
  )
}
