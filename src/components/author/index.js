import React from 'react';
import { window } from 'browser-monads';
import PropTypes from "prop-types"
import './author.scss';


const Author = ({ data }) => (
  <div className="author">
  <div className="author__img">
    <img className="author__img" src={data.author.image.fluid.src}/>
  </div>
    <h2 className="author__name"> {data.author.name} </h2>
    <h3 className="author__bio" dangerouslySetInnerHTML={
        {__html: `${data.author.shortBio.childMarkdownRemark.html}`}
    } />
  </div>
)



Author.defaultProps = {

}

Author.propTypes = {
  data: PropTypes.object,
}


export default Author
