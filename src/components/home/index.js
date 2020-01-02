import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './home.scss'

export default () => (
   <StaticQuery
     query={graphql`
 query HomeQuery {
   allContentfulBlog(
       limit: 10
       sort: { fields: [createdAt], order: DESC }
       filter: {
       node_locale: {eq: "en-US",}
       home: {eq: true}
     }
     ) {
     edges {
       node {
         id
         slug
         title
         shortDescription
         categories {
             title
             id
         }
         featuredImage {
           fluid(maxWidth: 1200, quality: 85) {
             src
             sizes
           }
         }
       }
     }
   }
 }
`}

     render={data => (
        <div className='feed--home'>
            <div key={data.allContentfulBlog.edges[0].node.id} className='full-card'>
            <img className='full-card--img' src={data.allContentfulBlog.edges[0].node.featuredImage.fluid.src} alt="Picture"/>
              <div className='full-card--text'>
                <p className='full-card--text__category'>{data.allContentfulBlog.edges[0].node.categories[0].title}</p>
                <p className='full-card--text__title'>{data.allContentfulBlog.edges[0].node.title}</p>
                <p className='full-card--text__description'>{data.allContentfulBlog.edges[0].node.shortDescription}</p>
              </div>
            </div>

            {data.allContentfulBlog.edges.slice(1).map(edge => (

                <div key={edge.node.id} className='card'
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`
                }
              }
            onClick={() => navigate(`/blog/${edge.node.slug}`)} >
            <p className='card__category'>{edge.node.categories[0].title}</p>
            <p className='card__title'>{edge.node.title}</p>
            </div>
          ))}
        </div>
     )}
   />
 );
