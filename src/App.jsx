import React, { useState } from 'react'
import {
  ArrowRight, CarFront, ChevronDown, MapPin, Menu,
  MessageSquareText, Phone, Wrench, X
} from 'lucide-react'

const business = {
  phoneDisplay: '(512) 555-0148',
  phoneHref: 'tel:+15125550148',
  textHref: 'sms:+15125550148',
  email: 'service@ljsclassicmotors.com',
  area: 'Austin & the surrounding Hill Country',
}

const services = [
  ['Drivability & Ignition','Hard starts, rough running, ignition timing, plugs, wires, points, coils, vacuum problems, and general old-car troubleshooting.'],
  ['Electrical','Starting, charging, lighting, switches, relays, basic wiring faults, alternators, generators, and batteries.'],
  ['Cooling Systems','Overheating diagnosis, radiators, hoses, thermostats, water pumps, electric fans, and cooling system service.'],
  ['Fuel Systems','Fuel pumps, filters, lines, fuel pressure and delivery problems, plus basic carburetor-related diagnosis.'],
  ['Recommissioning','Cars that have been sitting, neglected projects, and getting old machinery safely back into service.'],
  ['General Mechanical Repair','Belts, hoses, accessories, minor leaks, maintenance, and practical mechanical repairs that make sense to handle mobile.'],
]

const portfolio = [
  ['Cooling & Airflow','Fan shrouds, electric fan fitment, radiator work, and solving cooling-system problems on older vehicles.'],
  ['Mechanical & Fabrication','Hands-on repair and fabrication work where an off-the-shelf solution is not always the right answer.'],
  ['Electrical & Diagnosis','Charging, starting, lighting, wiring cleanup, and tracing the kind of faults that build up over decades.'],
]

const faqs = [
  ['What kinds of cars do you work on?','LJ’s Classic Motors is focused on classic and vintage vehicles rather than late-model general repair. Carbureted cars, points ignition, early electronic ignition, generators, mechanical fuel systems, and older wiring are all welcome.'],
  ['Do you do every repair mobile?','No. Some work is better suited to a lift, machine shop, or full shop environment. I’ll tell you up front if a job is not a good mobile fit.'],
  ['Can you look at a car that has been sitting for years?','Yes. Those are often best handled as a recommissioning inspection first: fuel, ignition, cooling, brakes, fluids, wiring, and a plan to get the car running safely again.'],
]

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-badge">LJ</span>
          <span className="brand-type">
            <b>LJ'S CLASSIC MOTORS</b>
            <small>MOBILE SERVICE • AUSTIN, TEXAS</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About Me</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="header-contact" href={business.textHref}>TEXT FOR SERVICE <ArrowRight size={14}/></a>

        <button className="menu-button" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
          {navOpen ? <X/> : <Menu/>}
        </button>

        {navOpen && (
          <div className="mobile-nav">
            <a href="#services" onClick={()=>setNavOpen(false)}>Services</a>
            <a href="#portfolio" onClick={()=>setNavOpen(false)}>Portfolio</a>
            <a href="#about" onClick={()=>setNavOpen(false)}>About Me</a>
            <a href="#faq" onClick={()=>setNavOpen(false)}>FAQ</a>
            <a className="button dark-button" href={business.textHref}>Text for service</a>
          </div>
        )}
      </header>

      <main>
        <section className="hero">
          <div className="hero-frame">
            <div className="corner corner-a"/>
            <div className="corner corner-b"/>

            <div className="hero-copy">
              <div className="service-kicker">
                <span></span>
                MOBILE SERVICE FOR CLASSIC & VINTAGE AUTOMOBILES
                <span></span>
              </div>

              <h1>
                KEEP THE OLD STUFF
                <em>ON THE ROAD.</em>
              </h1>

              <p className="hero-text">
                Hands-on service for older cars that deserve somebody who understands how they were built.
                Diagnosis, ignition, electrical, fuel, cooling, and practical repairs — at your garage or driveway.
              </p>

              <div className="hero-actions">
                <a href={business.textHref} className="button dark-button">
                  <MessageSquareText size={17}/> Text for service
                </a>
                <a href="#services" className="button outline-button">
                  View services <ArrowRight size={16}/>
                </a>
              </div>

              <div className="hero-meta">
                <div><MapPin size={16}/><span>{business.area}</span></div>
                <div><CarFront size={16}/><span>Classic & vintage focused</span></div>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-placeholder">
                <CarFront size={66} strokeWidth={1.2}/>
                <b>YOUR BEST CAR / WORK PHOTO</b>
                <span>One strong real image will make this whole page feel legitimate.</span>
              </div>
              <div className="photo-caption">EST. AUSTIN, TEXAS</div>
            </div>
          </div>

          <div className="service-marquee">
            <span>IGNITION</span><i>◆</i>
            <span>ELECTRICAL</span><i>◆</i>
            <span>FUEL SYSTEMS</span><i>◆</i>
            <span>COOLING</span><i>◆</i>
            <span>DIAGNOSIS</span><i>◆</i>
            <span>RECOMMISSIONING</span>
          </div>
        </section>

        <section className="section intro-band">
          <div className="deco-heading">
            <span className="deco-line"></span>
            <p>OLD-CAR SERVICE, WITHOUT THE GENERAL-REPAIR-SHOP RUNAROUND</p>
            <span className="deco-line"></span>
          </div>
          <h2>Built for the cars most shops would rather not touch.</h2>
          <p>
            Old ignition systems, mechanical fuel systems, decades-old wiring, cooling problems, previous-owner repairs,
            and cars that have been sitting too long — that is exactly the point.
          </p>
        </section>

        <section className="section services-section" id="services">
          <div className="section-title-row">
            <div>
              <p className="section-label">SERVICE DEPARTMENT</p>
              <h2>What I work on</h2>
            </div>
            <div className="ornament">LJ</div>
          </div>

          <div className="services-grid">
            {services.map(([title,text], i) => (
              <article className="service-item" key={title}>
                <span className="service-number">{String(i+1).padStart(2,'0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="service-callout">
            <Wrench size={24}/>
            <div>
              <b>Not sure if the job makes sense mobile?</b>
              <span>Text the year, make, model, location, and what the car is doing.</span>
            </div>
            <a href={business.textHref}>ASK ABOUT A JOB <ArrowRight size={15}/></a>
          </div>
        </section>


        <section className="section portfolio-section" id="portfolio">
          <div className="section-title-row portfolio-heading">
            <div>
              <p className="section-label">SELECTED WORK</p>
              <h2>Portfolio</h2>
            </div>
            <p className="portfolio-intro">
              A growing collection of the kind of work LJ’s Classic Motors is built around.
              Replace these placeholders with real job photos and short notes as you go.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolio.map(([title,text], i) => (
              <article className="portfolio-card" key={title}>
                <div className="portfolio-photo">
                  <div className="photo-placeholder">
                    <Wrench size={44} strokeWidth={1.15}/>
                    <b>PROJECT PHOTO {String(i+1).padStart(2,'0')}</b>
                    <span>Add a real before, during, or finished-work photo here.</span>
                  </div>
                  <span className="portfolio-index">0{i+1}</span>
                </div>
                <div className="portfolio-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner">
            <div className="about-photo">
              <div className="photo-placeholder dark-photo">
                <Wrench size={58} strokeWidth={1.15}/>
                <b>YOUR WORK PHOTO</b>
                <span>Engine bay, diagnosis, fabrication, or something real and mechanical.</span>
              </div>
            </div>

            <div className="about-copy">
              <p className="section-label gold-label">ABOUT ME</p>
              <h2 className="about-title">About Me</h2>
              <p className="about-intro">I’ve NOT spent most of my time around older cars, learning how they work through hands-on repair, troubleshooting, fabrication, and restoration work.</p>
              <p className="lead">
                I like older vehicles because the systems are understandable and mechanical. You can trace a problem,
                figure out what failed, and repair it without treating the whole car like a sealed appliance.
              </p>
              <p>
                LJ’s Classic Motors grew out of that experience and from seeing how many general repair shops simply do not want
                to work on older vehicles anymore.
              </p>
              <p>
                My approach is straightforward: understand the problem first, be clear about what I can and cannot take on,
                and do practical work that keeps old cars usable.
              </p>

              <div className="principles">
                <div><span>01</span><b>CLASSIC-FOCUSED</b><small>This is the work I actually want to be doing.</small></div>
                <div><span>02</span><b>STRAIGHTFORWARD</b><small>If a job is outside my wheelhouse, I’ll say so.</small></div>
                <div><span>03</span><b>HANDS-ON</b><small>Diagnose it, repair it, and keep the car usable.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <p className="section-label centered-label">HOW IT WORKS</p>
          <h2 className="center-title">Simple on purpose.</h2>

          <div className="process-strip">
            <div><span>1</span><b>TEXT THE CAR</b><p>Year, make, model, location, and what it is doing.</p></div>
            <div><span>2</span><b>MAKE A PLAN</b><p>I’ll tell you whether it is a good mobile job and what the likely first step is.</p></div>
            <div><span>3</span><b>I COME TO IT</b><p>Driveway, garage, storage space, or wherever the car is when practical.</p></div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-title">
            <p className="section-label">COMMON QUESTIONS</p>
            <h2>Before you call.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q,a]) => <Faq key={q} q={q} a={a}/>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-border">
            <div>
              <p className="section-label light-label">NEED HELP WITH AN OLD CAR?</p>
              <h2>Tell me what it’s doing.</h2>
              <p>Send the year, make, model, location, and the problem. Photos or a short video help too.</p>
            </div>
            <div className="cta-contact">
              <a className="button cream-button" href={business.textHref}>
                <MessageSquareText size={18}/> TEXT FOR SERVICE
              </a>
              <a href={business.phoneHref}><Phone size={16}/> {business.phoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark">LJ</div>
        <div>
          <b>LJ'S CLASSIC MOTORS</b>
          <span>Mobile service for classic & vintage automobiles</span>
        </div>
        <div className="footer-right">
          <span>{business.area}</span>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
      </footer>
    </div>
  )
}

function Faq({q,a}) {
  const [open,setOpen] = useState(false)
  return (
    <div className={`faq ${open ? 'open' : ''}`}>
      <button onClick={()=>setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown size={19}/>
      </button>
      {open && <p>{a}</p>}
    </div>
  )
}

export default App