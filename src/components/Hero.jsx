import React from 'react'

export default function Hero(){
  return (
    <section className="hero" id="top">
      <div className="glass hero-card">
        <h1>Build a brand you can <span className="accent">ship</span>.</h1>
        <p>Nimbus Labs is a fictitious cloud/AI studio. This demo shows a clean, glassmorphic system you can reskin in minutes.</p>
        <div className="actions">
          <a className="btn" href="#contact">Start a Project</a>
          <a className="btn ghost" href="#showcase">See Work</a>
        </div>
      </div>
    </section>
  )
}