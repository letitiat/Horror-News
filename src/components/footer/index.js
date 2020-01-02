import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import './footer.scss';

const Footer = () => (
    <nav className="footer">
        <div className='footer__items'>
        <Link className={window.location.href.indexOf('contact') > 0 ? 'footer__item--link active' : 'footer__item--link'}
        to='/contact'>Podcasts</Link>
        <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'footer__item--link active' : 'footer__item--link'}
        to='/blog'>Movies</Link>
        <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'footer__item--link active footer__logo' : 'footer__item--link footer__logo'}
        to='/blog'>spoop</Link>
           <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
           to='/contact'>Games</Link>
           <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'footer__item--link active' : 'footer__item--link'}
           to='/blog'>Blog</Link>
        </div>
    </nav>
)

export default Footer
