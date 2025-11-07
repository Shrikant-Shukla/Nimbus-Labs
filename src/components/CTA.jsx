import React from 'react'

export default function CTA(){
  return (
    <section className="section" id="contact">
      <div className="glass cta">
        <h2>Have a product to launch in 30 days?</h2>
        <p>We run brand sprints that start on Monday and end with a clickable narrative by Friday.</p>
        <form className="inline-form" onSubmit={(e)=>e.preventDefault()}>
          <input required placeholder="Your email" type="email"/>
          <button className="btn" type="submit">Request a slot</button>
        </form>
      </div>
    </section>
  )
}