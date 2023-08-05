import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="header-cont">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="cross"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" className="menu-button">
          <GiHamburgerMenu className="menu" />
        </button>
      }
      className="popup-cnt"
    >
      {close => (
        <div className="box-field">
          <button type="button" className="close-btn" onClick={() => close()}>
            <IoMdClose size="30" />
          </button>
          <ul>
            <li className="listit">
              <Link to="/" onClick={() => close()} className="link-ins">
                <AiFillHome size="30" />
                <h1>Home</h1>
              </Link>
            </li>
            <li className="listit">
              <Link to="/about" onClick={() => close()} className="link-ins">
                <BsFillInfoSquareFill size="30" />
                <h1>About</h1>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
