import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import "./layout.css"
import Header from '../examples/Header'
const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}

      
      <Footer />
    </>
  )
}

export default layout
