import React from 'react'
import logo from '../public/images/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {

  const validation = (event) => {
    event.preventDefault()
    var username = event.target.username.value
    var password = event.target.password.value
    if (username === "admin" && password === "admin") {
      alert("Berhasil")
    }
    else {
      alert("Maaf username dan password tidak valid")
    }
  }

  return (
    <>
      <div className="login">
        <h1 style={{ textAlign: "center", color: "orangered" }}>Login</h1>
        <img id="logo" src={logo} width="350px" />
        <form style={{ textAlign: "center" }} onSubmit={validation}>
          <div class="isian">
            <label for="name">Username</label><br />
            <input className="input-text" type="text" id="name" name="username" placeholder="Enter Username" /><br />
          </div>
          <div class="isian">
            <label for="password">Password</label><br />
            <input className="input-text" type="password" id="password" name="password" placeholder="Enter Password" /><br />
          </div>
          <button className="btn-kirim" style={{ marginLeft: "0" }}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login