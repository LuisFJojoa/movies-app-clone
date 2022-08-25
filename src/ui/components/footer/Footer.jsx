import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MovieContext } from '../../../movies/context';

import bg from '../../../assets/footer-bg.jpg';
import logo from '../../../assets/tmovie.png';

import './footer.scss';

export const Footer = () => {

    const { response } = useContext(MovieContext)

    return (

        <>
            {
                response && <>
                    <footer className="footer" style={{ backgroundImage: `url(${bg})` }}>
                        <section className="footer__content container">
                            <section className="footer__content__logo">
                                <figure className="logo">
                                    <img src={logo} alt="" />
                                    <Link to="/">Jojo Movies</Link>
                                </figure>
                            </section>
                            <div className="footer__content__menus">
                                <nav className="footer__content__menu">
                                    <Link to="/">Home</Link>
                                    <Link to="/">Contact us</Link>
                                    <Link to="/">Term of services</Link>
                                </nav>
                                <nav className="footer__content__menu">
                                    <Link to="/">Live</Link>
                                    <Link to="/">FAQ</Link>
                                    <Link to="/">Premium</Link>
                                </nav>
                                <nav className="footer__content__menu">
                                    <Link to="/">You must watch</Link>
                                    <Link to="/">Recent release</Link>
                                    <Link to="/">Top IMDB</Link>
                                </nav>
                            </div>
                        </section>
                    </footer></>
            }
        </>

    );
}