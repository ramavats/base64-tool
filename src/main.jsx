import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Encrypt from './components/Encrypt.jsx'
import Decrypt from './components/Decrypt.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col justify-around'>
    <App />
    <Footer />
    </div>
  </React.StrictMode>,
)
