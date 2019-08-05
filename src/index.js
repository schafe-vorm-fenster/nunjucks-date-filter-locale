// const moment = require('moment');
const moment = require('moment-timezone');

// Capture the a or the p in the meridiem
const meridiemRegEx = new RegExp('(a{1,2}|p).?m{1}?.?', 'i');
let defaultFormat = 'YYYY';
let defaultLocale = 'en';
let defaultTimezone = 'America/Los_Angeles';

const getMeridiemFormat = (dateString, format = defaultFormat) =>
  moment(dateString).format(format).replace(meridiemRegEx, '$1.m.');

const getFormat = (dateString, format = defaultFormat) =>
  moment(dateString).format(format);

function getFilter (dateString, ...args) {
  const isMeridiemOnly = typeof args[0] === 'boolean';
  let [format = null, isMeridiem = null] = args;

  moment.tz.setDefault(defaultTimezone);
  moment.locale(defaultLocale);

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

// Set user-specified default locale
module.exports.setLocale = locale => (defaultLocale = locale);

// Set user-specified default timezone
module.exports.setTimezone = timezone => (defaultTimezone = timezone);

// Add filter to nunjucks environment
module.exports.install = (env, customName) => {
  env.addFilter(customName || 'date', getFilter);
};
