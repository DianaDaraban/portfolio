import { React, useState } from 'react'
import './styles-page.css'
import './styles-effects.css'
import SocialIcons from './components/SocialIcons'
import me from './img/me.png'
import interview from './img/interview.mp4'

import Description from './components/Description'
import PortfolioText from './components/PortfolioText'
import Education from './components/Education'
import Experience from './components/Experience'

export default function Home() {
  const [portfolioHeight, setPortfolioHeight] = useState('')

  const portfolioHover = (height) => {
    style = { height: setPortfolioHeight(height) }
  }
  return (
    <>
      <div className="main-content">
        <span className="contact-parent">
          <div className="contact-path">
            <video src={interview} autoPlay loop muted></video>
            <div className="contact-overlay"></div>
            <p id="contact">Contact</p>
          </div>
          <div className="contact-info-text">
            <p className="contact-description-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem mollitia est numquam ullam, id molestias adipisci
              nulla, dolores necessitatibus similique eius repellat quasi
              aperiam corrupti?
            </p>
          </div>
        </span>
        <span className="studies-parent">
          <div className="studies-path">
            <div className="studies-overlay"></div>
            <Education />
            {/* <video src={interview} autoPlay loop muted></video> */}
            <p id="studies">My education</p>
          </div>
        </span>

        <span className="experience-parent">
          <div className="experience-path">
            {/* <video src={jump} autoPlay loop muted></video> */}
            <Experience />
            <div className="experience-overlay"></div>
            <p id="experience">Work Experience</p>
          </div>
        </span>
        <span className="portfolio-parent" style={{ height: portfolioHeight }}>
          <div className="portfolio-path">
            <PortfolioText portfolioHover={portfolioHover} />
            {/* <video src={jump} autoPlay loop muted></video> */}
            <div className="portfolio-overlay"></div>
            <p id="portfolio">Portfolio</p>
          </div>
        </span>
        <span className="about-parent">
          <Description />
          <div className="about-path">
            {/* <video src={jump} autoPlay loop muted></video> */}
            <img src={me} alt="me" className="img-me" />
            <div className="about-overlay"></div>
            <p>Diana Dărăban</p>
          </div>
        </span>
        <SocialIcons />
      </div>
    </>
  )
}
