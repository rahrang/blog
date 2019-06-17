import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import BlogPostPreviewWrapper from './styles';

const BlogPostPreview = props => (
  <BlogPostPreviewWrapper>
    <div className="flex-column items-start mb-1">
      <div className="image">
        <img className="mb-0" src={props.backgroundImage.file.url} alt="" />
      </div>
      <div className="content">
        <h2 className="mb-h">
          <Link to={`/${props.slug}`}>{props.title}</Link>
        </h2>
        <p className="mb-0">{props.subtitle}</p>
        <hr className="my-1 mx-0" />
        <div className="flex-row items-baseline content-between">
          <p className="published">{`Published ${props.publishedAt}`}</p>
          <Link className="read" to={`/${props.slug}`}>
            Read →
          </Link>
        </div>
      </div>
    </div>
  </BlogPostPreviewWrapper>
);

BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  backgroundImage: PropTypes.exact({
    file: PropTypes.exact({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogPostPreview;
