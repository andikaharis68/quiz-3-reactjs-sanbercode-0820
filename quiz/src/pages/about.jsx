import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="about">
        <h2>Data Peserta Sanbercode Bootcamp ReactJs</h2>
        <div style={{ display: "flex" }}>
          <div className="foto"> </div>
          <ol>
            <li>Nama: Moch Andika Haris Saputra</li>
            <li>Email: andikaharis@gmail.com</li>
            <li>Sistem Operasi yang digunakan: Windows 10</li>
            <li>Akun Github: andikaharis</li>
            <li>Akun Telegram: andikaharis</li><br />
            <Link to="/home" className="backHome">HOME</Link>
          </ol>
        </div>
      </div>
    </>
  )
}


export default About