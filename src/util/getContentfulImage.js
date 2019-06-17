import _isUndefined from 'lodash/isUndefined';

export const defaultLocale = `en-US`;

export default (node, locale = defaultLocale) => {
  const {
    data: {
      target: { fields },
    },
  } = node;

  if (_isUndefined(fields)) {
    return {};
  }

  return {
    title: fields.title[locale],
    description: (fields.description || {})[locale] || '',
    src: `https:${fields.file[locale].url}`,
  };
};
