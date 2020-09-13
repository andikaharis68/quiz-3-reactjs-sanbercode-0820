import React, { Component } from 'react'
import MovieList from './movieList'
import MovieSearch from './movieSearch'
import MovieForm from './movieForm'
import { MovieProvider } from './movieContext'

const Movie = () => {
  return (
    <>
      <section>
        <MovieProvider>
          <MovieSearch />
          <MovieList />
          <MovieForm />
        </MovieProvider>
      </section>
    </>
  )
}

export default Movie