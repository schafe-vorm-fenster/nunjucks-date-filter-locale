const moment = require('moment');

// Capture the a or the p in the meridiem
const meridiemRegEx = new RegExp('(a{1,2}|p).?m{1}?.?', 'i');
let defaultFormat = 'YYYY';
let defaultLocale = 'fr';

const getMeridiemFormat = (dateString, format = defaultFormat) =>
  moment(dateString).format(format).replace(meridiemRegEx, '$1.m.');

const getFormat = (dateString, format = defaultFormat) =>
  moment(dateString).format(format);

const getLocale = (locale = defaultLocale) =>
  moment.locale(locale); 

function getFilter (dateString, ...args) {
  const isMeridiemOnly = typeof args[0] === 'boolean';
  let [format = null, isMeridiem = null] = args;

  if (!args.length) {
    return getFormat(dateString);
  }

  if (format && isMeridiem) {
    return getMeridiemFormat(dateString, format);
  }

  if (format && !isMeridiemOnly) {
    return getFormat(dateString, format);
  } else {
    return getMeridiemFormat(dateString);
  }
}

module.exports = getFilter;

// Set user-specified default format for date
module.exports.setDefaultFormat = format => (defaultFormat = format);

// Set user-specified default format for date
module.exports.setLocale = locale => (defaultLocale = locale);

// Add filter to nunjucks environment
module.exports.install = (env, customName) => {
  env.addFilter(customName || 'date', getFilter);
};
