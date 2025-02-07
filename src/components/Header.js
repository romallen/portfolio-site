import React from "react"
// import Fade from "react-reveal/Fade"
import data from "../data"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          {/* <Fade left> */}
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          {/* </Fade>
          <Fade bottom cascade> */}
            <div className="heading-wrapper">
               <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "I build"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experiences"}
              </h1>
            </div>
          {/* </Fade>
          <Fade bottom> */}
            <p>{data.headerParagraph}</p>
          {/* </Fade> */}
          {/* <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "romallen1@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade> */}
        </div>
      </div>
    </div>
  )
}

export default Header
