import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import './nav.scss';

const Nav = () => (
    <nav className="nav">
        <div className='nav__items'>
        <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
        to='/contact'>Podcasts</Link>
        <Link className={window.location.href.indexOf('movies') > 0 ? 'nav__item--link active' : 'nav__item--link'}
        to='/movies'>Movies</Link>
        <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active nav__logo' : 'nav__item--link nav__logo'}
        to='/'>spoop</Link>
           <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
           to='/contact'>Games</Link>
           <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'}
           to='/blog'>Blog</Link>
        </div>
    </nav>
)

export default Nav
