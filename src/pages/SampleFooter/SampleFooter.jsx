import React from 'react'
import './SampleFooter.css'

const SampleFooter = () => {
  return (
      <footer className="footer">
      <div className="footer-section">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Your Profile</a></li>
        </ul>
        <ul>
          <li><a href="#">Your Library</a></li>
          <li><a href="#">More Apps</a></li>
        </ul>
        <ul>
          <li><a href="#">Privacy and Security</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <p>&#169; Eyy!!. All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="#">🎮</a>
        <a href="#">👦</a>
        <a href="#">📚</a>
        <a href="#">💸</a>
      </div>
    </footer>
  )
}

export default SampleFooter