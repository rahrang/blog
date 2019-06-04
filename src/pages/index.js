import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import BlogPostPreview from '../components/BlogPostPreview';

const IndexPage = () => {
  const blogPostsPreviewQuery = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedAt, order: DESC }
        filter: { isHidden: { eq: false } }
      ) {
        edges {
          node {
            id
            title
            subtitle
            slug
            publishedAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Engineering Blog" />
      <h1>Hello Everyone!</h1>
      <p>Welcome Rahul Rangnekar's Blog!</p>
      {blogPostsPreviewQuery.allContentfulBlogPost.edges.map(edge => (
        <BlogPostPreview key={edge.node.id} {...edge.node} />
      ))}
    </Layout>
  );
};

export default IndexPage;
