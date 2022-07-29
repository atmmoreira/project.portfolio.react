import React from 'react'
import './Header.css';

// Images
import IconEnglish from '../../assets/images/IconEnglish.png'
import IconPortuguese from '../../assets/images/IconPortuguese.png'

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex">
          <a href="/" className="active">Home</a>
          <a href="/hired">Orçamentos</a>
        </div>
        <div>
          <a href="#"><img src={IconPortuguese} alt="IconPortuguese" /></a>
          <a href="#"><img src={IconEnglish} alt="IconEnglish" /></a>
        </div>
      </div>
    </nav>
  )
}
