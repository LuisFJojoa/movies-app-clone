import { useContext, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/context';
import { MovieContext } from '../../../movies/context';

import { Toast } from '../../../utils/Toast';

import logo from "../../../assets/tmovie.png"
import './header.scss'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'All Movies',
    path: '/movie'
  },
  {
    display: 'All Series',
    path: '/tv'
  },

]
export const Header = () => {

  const { user, logout } = useContext(AuthContext)
  const { pathname } = useLocation()

  const headerRef = useRef(null)
  const active = headerNav.findIndex(e => e.path === pathname)
  const navigate = useNavigate();

  const {setHeaderTitle}  = useContext(MovieContext)

  const handleLinkClick = (title) => {
    setHeaderTitle(title);
    localStorage.setItem('headerTitle', title !== 'Home' && title);
  };

  const onLogout = () => {

    logout()

    Toast.fire({
      icon: 'success',
      title: `Session successfully closed!`,
    })
    navigate('/login', {
      replace: true
    })
  }

  useEffect(() => {
    const shrinkHeader = () => {
       headerRef.current.classList[(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? 'add' : 'remove']('shrink') 
    }

    window.addEventListener('scroll', shrinkHeader)
  
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])
  

  return (
    <header ref={headerRef} className="header">
      <div className='header__wrap container'>
        <figure className='logo'>
          <img src={logo} alt="Logo Movies" />
          <Link to="/">Jojo movies</Link>
        </figure>
        <nav>
          <ul className="header__nav">
            {
              headerNav.map((e, i) => (
                <li key={i} className={`${i === active ? 'active' : ''}`}>
                  <Link onClick={() => handleLinkClick(e.display)} to={e.path}>{e.display}</Link>
                </li>
              ))
            }
            <section className='header__nav__user'>
              {/* <span>
                {user?.name}
              </span> */}
              <button className='header__nav__user__btn__logout' onClick={onLogout}>Logout</button>
            </section>
          </ul>
        </nav>

      </div>
    </header>
  )
}