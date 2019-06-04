import React from 'react';
import PropTypes from 'prop-types';

const BlogPostPreview = props => (
  <div>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

export default BlogPostPreview;
