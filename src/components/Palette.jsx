import React from 'react'

const swatches = [
  { var: '--brand', name: 'Brand Primary' },
  { var: '--brand-2', name: 'Brand Secondary' },
  { var: '--ink', name: 'Ink' },
  { var: '--muted', name: 'Muted' },
]

export default function Palette(){
  return (
    <div className="glass palette">
      <h3>Color Palette</h3>
      <p>Use color as a spotlight, never wallpaper. Keep backgrounds calm, elevate CTAs.</p>
      <div className="swatches">
        {swatches.map((s,i)=> (
          <div key={i} className="swatch" style={{ background: `var(${s.var})` }}>
            <span>{s.name}</span>
            <code>{s.var}</code>
          </div>
        ))}
      </div>
    </div>
  )
}