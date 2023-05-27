import React from 'react'
import './styles-page.css'
import './styles-effects.css'
import SocialIcons from './components/SocialIcons'
import me from './img/me.png'

export default function Home() {
  return (
    <>
      <div className="main-content">
        <span className="contact-parent">
          <div className="contact-path">
            {/* <video src={wine} autoPlay loop muted></video> */}
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
            {/* <video src={yoga} autoPlay loop muted></video> */}
            <p id="studies">My education</p>
          </div>
        </span>

        <span className="experience-parent">
          <div className="experience-path">
            {/* <video src={jump} autoPlay loop muted></video> */}
            <div className="experience-overlay"></div>
            <p id="experience">Work Experience</p>
          </div>
        </span>
        <span className="portfolio-parent">
          <div className="portfolio-path">
            {/* <video src={jump} autoPlay loop muted></video> */}
            <div className="portfolio-overlay"></div>
            <p id="portfolio">Portfolio</p>
          </div>
        </span>
        <span className="about-parent">
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
