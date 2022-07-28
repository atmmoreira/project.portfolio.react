import React from 'react'
import './Header.css';

// Images
import IconEnglish from '../../assets/images/IconEnglish.png'
import IconPortuguese from '../../assets/images/IconPortuguese.png'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <nav className="d-flex">
          <a href="/" className="active">Home</a>
          <a href="/hired">Orçamentos</a>
        </nav>
        <div className="d-flex">
          <img className="mx-2" src={IconPortuguese} alt="IconPortuguese" />
          <img src={IconEnglish} alt="IconEnglish" />
        </div>
      </div>
    </nav>
  )
}
