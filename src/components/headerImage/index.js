import React from 'react';
import { window } from 'browser-monads';
import PropTypes from "prop-types"
import './headerImage.scss';
import Nav from '../nav';


const HeaderImage = ({ data }) => (
  <div className="background-image__hero"   style={{
        backgroundImage:
        `url(${data.featuredImage.fluid.src})`
    }
  }>
  <div className="container">
      <Nav />
        <div className="blog-header__content">
          <h3> {data.categories[0].title} </h3>
          <h1> {data.title} </h1>
          <h2> {data.shortDescription} </h2>
        </div>
    </div>
  </div>
)

HeaderImage.defaultProps = {

}

HeaderImage.propTypes = {
  data: PropTypes.object,
}


export default HeaderImage
