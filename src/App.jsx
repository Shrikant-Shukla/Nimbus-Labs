import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import GlassCard from './components/GlassCard'
import Palette from './components/Palette'
import Typography from './components/Typography'
import Logos from './components/Logos'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App(){
  return (
    <>
      <div className="bg-grid" />
      <Nav/>
      <main className="container">
        <Hero/>

        <section id="principles" className="section">
          <h2 className="section-title">Brand Principles</h2>
          <div className="grid">
            <GlassCard title="Clarity" desc="We remove noise. Every pixel earns its place."/>
            <GlassCard title="Trust" desc="Security-first patterns; transparency by default."/>
            <GlassCard title="Velocity" desc="Fast decisions, faster iterations, measurable impact."/>
          </div>
        </section>

        <section id="visuals" className="section">
          <h2 className="section-title">Visual Language</h2>
          <div className="stack">
            <Palette/>
            <Typography/>
          </div>
        </section>

        <section id="showcase" className="section">
          <h2 className="section-title">Showcase</h2>
          <div className="grid">
            <GlassCard title="Dashboard Concept" tag="UI" link="#" desc="Glass + gradients with accessible contrast and motion hygiene."/>
            <GlassCard title="Launch Microsite" tag="Web" link="#" desc="Zero-friction narrative with focused CTAs and scroll cues."/>
            <GlassCard title="Deck System" tag="Pitch" link="#" desc="Composable slide tokens: colors, type, spacing, iconography."/>
          </div>
        </section>

        <section id="assets" className="section">
          <h2 className="section-title">Logo & Marks</h2>
          <Logos/>
        </section>

        <CTA/>
      </main>
      <Footer/>
    </>
  )
}