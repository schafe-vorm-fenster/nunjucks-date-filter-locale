// const moment = require('moment');
const moment = require('moment-timezone');

// Capture the a or the p in the meridiem
let defaultFormat = 'YYYY';
let defaultLocale = 'en';
let defaultTimezone = 'America/Los_Angeles';

function getFilter (dateString, ...args) {
  const isMeridiemOnly = typeof args[0] === 'boolean';
  let [format = null, operation = null, arg1 = null, arg2 = null] = args;

  if(!format) format = defaultFormat;

  moment.tz.setDefault(defaultTimezone);
  moment.locale(defaultLocale);

  if (!args.length) {
    return getFormat(dateString);
  }

  if(operation){
    if(operation == 'add' && arg1 && arg2){
      return moment(dateString).add(arg1,arg2).format(format); 
    }
    if(operation == 'subtract' && arg1 && arg2){
      return moment(dateString).subtract(arg1,arg2).format(format); 
    }    
  }

  return moment(dateString).format(format);
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