import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

import { Toast } from '../../utils/Toast'
import { users } from '../data/users'

import './loginPage.scss'
import bg from '../../assets/footer-bg.jpg';
import logo from "../../assets/tmovie.png"

export const LoginPage = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('user1@gmail.com')
  const [password, setPassword] = useState('user1')
  const { login } = useContext(AuthContext)

  const onLogin = (evt) => {
    evt.preventDefault()

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.

    if (email == "" || !regEmail.test(email)) {
      Toast.fire({
        icon: 'error',
        title: 'Oops... Please enter a valid email address.',
      })
      return false;
    }

    if (password == "") {
      Toast.fire({
        icon: 'error',
        title: 'Oops... Please enter a password.',
      })
      return false;
    }

    const user = users.find(user => user.email === email)
    const pass = users.find(user => user.password === password)

    if (user === undefined) {
      Toast.fire({
        icon: 'error',
        title: 'Oops... email not found, try again.',
      })
      return false;
    }

    if (pass === undefined) {
      Toast.fire({
        icon: 'error',
        title: 'Oops... wrong password, try again.',
      })
      return false;
    }

    if (!!user && !!pass) {
      Toast.fire({
        // position: 'bottom',
        icon: 'success',
        title: `${user.name} logged correctly!`,
      })
    }

    const userStorage = JSON.parse(localStorage.getItem('user'))
    const path = (userStorage?.name === user.name) ? localStorage.getItem('lastPath') : '/'

    login(user)
    navigate(path, {
      replace: true
    })
  }

  return (
    <main className="main__login" style={{ backgroundImage: `url(${bg})` }}>
      <figure className='logo'>
        <img src={logo} alt="Logo Movies" />
        <h2>Jojo movies</h2>
      </figure>
      <form onSubmit={onLogin} name="emailForm" className="main__login__form">

        <div className='form__fields'>
          <div className="form__fields__field">
            <label className="contact__form-tag">Mail:</label>
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              placeholder="Insert your email"
              value={email}
              className="contact__form-input" />
          </div>

          <div className="form__fields__field">
            <label className="contact__form-tag">Password:</label>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              placeholder="Insert your password"
              value={password}
              className="contact__form-input" />
          </div>
        </div>
        <div className='button__form'>
          <button onClick={onLogin} className="btn small" id="emailBtn">Login</button>
        </div>
      </form>
    </main>
  )
}
