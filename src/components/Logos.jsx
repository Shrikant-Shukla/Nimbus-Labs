import React from 'react'
import logoUrl from '../assets/logo.svg'

export default function Logos(){
  return (
    <div className="glass logos">
      <div className="logo-grid">
        <div className="logo-card">
          <img src={logoUrl} alt="Nimbus mark"/>
          <div>
            <div className="kicker">Primary Logo</div>
            <strong>Nimbus Labs</strong>
          </div>
        </div>
        <div className="logo-card alt">
          <div className="glyph" aria-hidden/>
          <div>
            <div className="kicker">Glyph</div>
            <strong>Storm Glyph</strong>
          </div>
        </div>
        <div className="logo-card wordmark">
          <div className="word">NIMBUS</div>
          <div className="kicker">Wordmark</div>
        </div>
      </div>
      <div className="notes">
        <p>Protective clearspace = 1× glyph size. Minimum width: 96px (web).</p>
        <p>Don’t distort, rotate, or place on busy imagery. Keep contrast ≥ 4.5:1.</p>
      </div>
    </div>
  )
}