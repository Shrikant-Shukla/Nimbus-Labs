import React, { useEffect, useState } from 'react'
import logoUrl from '../assets/logo.svg'

export default function Nav(){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) document.documentElement.dataset.theme = stored
  }, [])

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme
    const next = current === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Nimbus Labs Home">
        <img src={logoUrl} alt="Nimbus Labs logo"/>
        <span>Nimbus Labs</span>
      </a>

      <button className="ghost" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle Menu">☰</button>

      <nav className={`links ${open ? 'open' : ''}`}>
        <a href="#principles">Principles</a>
        <a href="#visuals">Visuals</a>
        <a href="#showcase">Showcase</a>
        <a href="#assets">Assets</a>
        <button className="ghost" onClick={toggleTheme} aria-label="Toggle theme">🌓</button>
        <a className="btn" href="#contact">Contact</a>
      </nav>
    </header>
  )
}