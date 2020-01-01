import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './home.scss'

export default () => (
   <StaticQuery
     query={graphql`
 query HomeQuery {
   allContentfulBlog(
       limit: 9
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
            {data.allContentfulBlog.edges.map(edge => (
                <div key={edge.node.id} className='card'
                style={{
                    backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10,10,10,0) 0%,
                    rgba(10,10,10,0) 50%,
                    rgba(10,10,10,0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`
                }}
            onClick={() => navigate(`/blog/${edge.node.slug}`)} >
            <p className='card__category'>{edge.node.categories[0].title}</p>
            <p className='card__title'>{edge.node.title}</p>
            </div>
          ))}
        </div>
     )}
   />
 );
