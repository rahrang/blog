import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import _isUndefined from 'lodash/isUndefined';

import Layout from '../components/Layout';
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
      backgroundImage {
        file {
          url
        }
      }
      publishedAt(formatString: "MMMM Do, YYYY")
      # lastUpdated(formatString: "MMMM Do, YYYY")
      tags
    }
  }
`;

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, description, src } = getContentfulImage(node);
      if (_isUndefined(src)) {
        return null;
      }

      return <img src={src} alt={`${title}: ${description}`} />;
    },
  },
};

class BlogPost extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost;

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
