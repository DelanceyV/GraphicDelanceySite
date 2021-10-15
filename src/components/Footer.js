import React from "react";
import gitLogo from "../images/git.png";
import linkedInLogo from "../images/Linkedin-Logo-Png-Transparent-Background.png"

export default function Footer () {
  return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col col-12 d-flex justify-content-center bottom">
                <span>©2021 Delancey Vela | all rights reserved</span>
              </div>
              <span>
                <a href="https://github.com/DelanceyV" target="_blank" rel="noreferrer"><img src={gitLogo} className="socialIcon"/></a>
                <a href="https://www.linkedin.com/in/delancey-vela-70a688123/" target="_blank" rel="noreferrer"><img src={linkedInLogo} className="socialIcon"/></a>
              </span>
            </div>
          </div>
        </footer>
      </>
  )
}