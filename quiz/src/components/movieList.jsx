import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { MovieContext } from './movieContext'

const MovieList = () => {

  const [movie, setMovie] = useContext(MovieContext)
  console.log(movie)

  useEffect(() => {
    if (movie.lists === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
        .then(res => {
          setMovie({
            ...movie,
            lists: res.data.map(movie => {
              return {
                id: movie.id,
                title: movie.title,
                description: movie.description,
                year: movie.year,
                duration: movie.duration,
                genre: movie.genre,
                rating: movie.rating,
                image_url: movie.image_url
              }
            })
          })
        })
    }
  }, [setMovie, movie])

  const handleEdit = (event) => {
    let movieId = parseInt(event.target.value)
    setMovie({ ...movie, selectedId: movieId, statusForm: "changeToEdit" })
  }

  const handleDelete = (event) => {
    let movieId = parseInt(event.target.value)

    let newLists = movie.lists.filter(el => el.id !== movieId)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${movieId}`)
      .then(res => {
        console.log(res)
      })

    setMovie({ ...movie, lists: [...newLists] })
  }

  const searching = (event) => {
    event.preventDefault()
    let input, filter, td, tr, p, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    td = document.querySelectorAll(".myTD");
    tr = document.querySelectorAll(".tr-list");
    for (i = 0; i < td.length; i++) {
      p = td[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  return (
    <>
      <form style={{ textAlign: "center" }} onSubmit={searching}>
        <input id="myInput" type="text" />
        <button style={{ backgroundColor: "orangered" }}>search</button>
      </form><br />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            movie.lists !== null && movie.lists.map((movie, index) => {
              // const desc = movie.description.slice(0, 200)
              return (
                <tr className="tr-list">
                  <td>{index + 1}</td>
                  <td className="myTD"><p>{movie.title}</p></td>
                  <td>{movie.description}</td>
                  <td>{movie.year}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>
                    <button onClick={handleEdit} value={movie.id} className="btn-edit">Edit</button>
                    <button onClick={handleDelete} value={movie.id} className="btn-del">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default MovieList