import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

import getContentfulImage from '../util/getContentfulImage';

export const BlogPostQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      body {
        json
      }
      # backgroundImage
      publishedAt(formatString: "MMMM Do, YYYY")
      # lastUpdated(formatString: "MMMM Do, YYYY")
      tags
    }
  }
`;

class BlogPost extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost;

    const options = {
      renderNode: {
        'embedded-asset-block': node => {
          const { title, description, src } = getContentfulImage(node);
          return <img src={src} alt={`${title}: ${description}`} />;
        },
      },
    };

    return (
      <Layout>
        <SEO
          title={blogPost.title}
          description={`${blogPost.publishedAt} | ${blogPost.subtitle}`}
          meta={blogPost.tags}
        />
        <h1>{blogPost.title}</h1>
        <p>{blogPost.publishedAt}</p>
        <div>{documentToReactComponents(blogPost.body.json, options)}</div>
      </Layout>
    );
  }
}

export default BlogPost;
