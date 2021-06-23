import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SearchInput from '../SearchInput'
import './index.css'

function Header() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', event => {
      event.preventDefault()
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  }, [])

  return (
    <nav className={`headers ${show && 'dark-header'}`}>
      <div className="content-container">
        <div className="start-part">
          <img
            src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196500/Group_7399_cjjn5h.png"
            alt="movielogo"
          />
          <ul>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/popular" className="nav-link">
              Popular
            </Link>
          </ul>
        </div>
        <div className="end-part">
          <ul>
            <SearchInput />
            {/*
            <img
              src="https://res.cloudinary.com/dnjj1m9j1/image/upload/v1624196473/Avatar_gmrmra.png"
              className="profile-img"
              alt="profileImg"
            />
            */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
