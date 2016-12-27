import rcm from 'react-css-modules';

const DEFAULT_OPTS = {
  allowMultiple: true,
  errorWhenNotFound: true
};

export default function cssModules(component, styles, opts = DEFAULT_OPTS) {
  if (process.env.NODE_ENV === 'production') opts.errorWhenNotFound = false;
  return rcm(component, styles, opts);
}
