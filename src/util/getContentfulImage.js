export const defaultLocale = `en-US`;

export default (node, locale = defaultLocale) => {
  const {
    data: {
      target: { fields },
    },
  } = node;
  return {
    title: fields.title[locale],
    description: fields.description[locale],
    src: `https:${fields.file[locale].url}`,
  };
};
