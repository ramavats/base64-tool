import React from 'react'
import { Helmet } from 'react-helmet';



const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 footer items-center justify-center p-4 bg-neutral text-neutral-content">
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p className='animate-bounce'>Made with 💖 by <a href='https://github.com/ramavats'>Rama</a></p>
  </nav>
</footer>
  )
}

export default Footer