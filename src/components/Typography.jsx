import React from 'react'

export default function Typography(){
  return (
    <div className="glass type">
      <h3>Typography</h3>
      <p>Inter. Tight leading. Weight for hierarchy, size for flow. Keep line-length ~66ch.</p>

      <div className="type-samples">
        <div>
          <div className="kicker">Kicker / Label</div>
          <h1>H1 Headline – Make it punchy.</h1>
          <h2>H2 Section Title</h2>
          <h3>H3 Card Title</h3>
        </div>
        <div>
          <p>
            Body: Glassmorphism uses translucent surfaces, blurred backgrounds, and subtle borders. Maintain contrast (WCAG AA+) by checking overlays.
          </p>
          <ul>
            <li>• Use 8pt spacing scale</li>
            <li>• Avoid pure-white overlays</li>
            <li>• Prefer neutral gradients under glass</li>
          </ul>
        </div>
      </div>
    </div>
  )
}