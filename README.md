# nunjucks-date-filter-locale

[![NPM version](https://badge.fury.io/js/nunjucks-date-filter-locale.svg)](http://badge.fury.io/js/nunjucks-date-filter-locale)

Date filter for nunjucks using momentjs date format functions including locale support.

	This date filter is a fork of [nunjucks-date](https://github.com/techmsi/nunjucks-date).


## Installation

```bash
npm nunjucks-date-filter-locale --save
```

## Config

```js
// Import the plugin
var nunjucksDate = require("nunjucks-date-filter-locale");

// Define a custom default date format. Any valid format works.
// The date format defaults to "YYYY"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat("MMMM Do YYYY, h:mm:ss a");

// Define a custom locale.
nunjucksDate.setLocale('de_DE');

// Define a custom timezone.
nunjucksDate.setTimezone('Europe/Berlin');

// Initialize your Nunjucks enironment
var env = new nunjucks.Environment();
```

### Using default name : 'date'

```js
// Pass the environment to `install()`
nunjucksDate.install(env);
```

### Using custom name

```js
// Pass the environment & a custom filter name
nunjucksDate.install(env, "yourFilterName");
```

The above is eqivalent to

```js
env.addFilter("date", require("nunjucks-date-filter-locale"));
```

## Usage


Simply format a date:

```nunjucks
{% set today = now | date("YYYY-MM-DD") %}
```

Calculate a date:

```nunjucks
{% set tomorrow = now | date("YYYY-MM-DD","add",1,"days") %}
```