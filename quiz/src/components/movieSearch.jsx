import React from 'react'

function cariFilm() {

}
const MovieSearch = () => {
  return (
    <>
      <form onSubmit={cariFilm} className="movie-search">
        <a style={{ fontFamily: "cursive" }}>Search Movie :  </a>
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name" />
      </form>
    </>
  )
}

export default MovieSearch
