import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import HeaderImage from '../components/headerImage';
import Author from '../components/author';
import SEO from '../components/seo';
import './blog.css';

const BlogTemplate = (props) => {
  return (
    <div className="blog">
      <HeaderImage  data={props.data.contentfulBlog} />
      <Layout className="wrapper--heros">
        <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keywords={props.data.contentfulBlog.seoKeywords} />

        <div className="container">
        <div className='blog__wrapper'>
            <div className='blog__content'>
                <div dangerouslySetInnerHTML={
                    {__html: `${props.data.contentfulBlog.body.childMarkdownRemark.html}`}
                } />
            </div>
        </div>
        </div>
        <Author  data={props.data.contentfulBlog} />
      </Layout>
      </div>
  )
}
export default BlogTemplate;

export const query = graphql`
query BlogTemplate($id: String!) {
  contentfulBlog(id: {eq: $id}) {
    title
    id
    slug
    body {
      childMarkdownRemark {
        html
      }
    }
    seoTitle
    seoDescription
    seoKeywords
    shortDescription
    seoImage {
      fluid(maxWidth: 1200, quality: 100) {
        src
      }
    }
    featuredImage {
      fluid(maxWidth: 1200, quality: 100) {
        src
      }
    }
    categories {
      title
    }
    author {
      name
      shortBio {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          src
        }
      }
    }
    publishDate
  }
}
`
