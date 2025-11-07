import React from 'react'

export default function GlassCard({ title, desc, tag, link }){
  return (
    <article className="glass card">
      {tag && <span className="chip">{tag}</span>}
      <h3>{title}</h3>
      <p>{desc}</p>
      {link && <a className="link" href={link}>Learn more →</a>}
    </article>
  )
}