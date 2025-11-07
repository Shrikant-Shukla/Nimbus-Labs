import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Nimbus Labs — Demo brand site.</small>
        <a className="link" href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}