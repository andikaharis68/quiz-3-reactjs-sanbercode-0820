import React, { Component } from 'react'
import MovieList from './movieList'
import MovieForm from './movieForm'
import { MovieProvider } from './movieContext'

const Movie = () => {
  return (
    <>
      <section>
        <MovieProvider>
          <MovieList />
          <MovieForm />
        </MovieProvider>
      </section>
    </>
  )
}

export default Movie