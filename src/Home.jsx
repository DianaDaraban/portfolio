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
import { MdOutlineAdsClick } from 'react-icons/md'

export default function Home() {
  const [portfolioHeight2, setPortfolioHeight2] = useState('36em')
  const [aboutHeight2, setAboutHeight2] = useState('440px')
  const [descriptionLetters, setDescriptionLetters] = useState('100')

  const portfolioBtn = () => {
    if (portfolioHeight2 === '36em') setPortfolioHeight2('56em')
    if (portfolioHeight2 === '56em') setPortfolioHeight2('36em')
    if (aboutHeight2 === '440px') setAboutHeight2('300px')
    if (aboutHeight2 === '300px') setAboutHeight2('440px')
    if (descriptionLetters === '100') setDescriptionLetters('200')
    if (descriptionLetters === '200') setDescriptionLetters('100')
  }
  const experienceBtn = () => {
    if (portfolioHeight2 === '36em') setPortfolioHeight2('56em')
    if (portfolioHeight2 === '56em') setPortfolioHeight2('36em')
    if (aboutHeight2 === '440px') setAboutHeight2('300px')
    if (aboutHeight2 === '300px') setAboutHeight2('440px')
    if (descriptionLetters === '100') setDescriptionLetters('200')
    if (descriptionLetters === '200') setDescriptionLetters('100')
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

        <span className="experience-parent" onClick={() => experienceBtn()}>
          <div className="experience-path">
            {/* <video src={jump} autoPlay loop muted></video> */}
            <Experience />
            <div className="experience-overlay"></div>
            <p id="experience">Work Experience</p>
          </div>
        </span>
        <span
          className="portfolio-parent"
          style={{
            height: portfolioHeight2,
            transition: 'all .8s',
            cursor: 'pointer',
          }}
        >
          <div className="portfolio-path" onClick={() => portfolioBtn()}>
            <PortfolioText />
            {/* <video src={jump} autoPlay loop muted></video> */}
            <div className="portfolio-overlay"></div>
            <p id="portfolio">Portfolio</p>
            <MdOutlineAdsClick
              className="click-portfolio"
              // style={{
              //   shadowColor: 'black',
              //   shadowOpacity: 2,
              //   textShadowRadius: 4,
              //   textShadowOffset: { width: 2, height: 2 },
              // }}
            />
          </div>
        </span>
        <span
          className="about-parent"
          style={{ height: aboutHeight2, transition: 'all 0.8s' }}
        >
          <Description descriptionLetters={descriptionLetters} />
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
