import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Footer'
import Navbar from './Navbar'
import Video from './Video'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Video/>
  <Footer/>
  </React.StrictMode>,
)
