# nunjucks-date-filter-locale

	This date filter is a fork of [nunjucks-date](https://github.com/techmsi/nunjucks-date).

[![NPM version](https://badge.fury.io/js/nunjucks-date-filter-locale.svg)](http://badge.fury.io/js/nunjucks-date-filter-locale)

Date filter for nunjucks using momentjs date format functions including locale support.

[![CircleCI](https://circleci.com/gh/techmsi/nunjucks-date.svg?style=svg)](https://circleci.com/gh/techmsi/nunjucks-date)
[![Build Status](https://travis-ci.org/techmsi/nunjucks-date.svg?branch=master)](https://travis-ci.org/techmsi/nunjucks-date)
[![Code Climate](https://codeclimate.com/github/techmsi/nunjucks-date/badges/gpa.svg)](https://codeclimate.com/github/techmsi/nunjucks-date)
[![Coverage Status](https://coveralls.io/repos/techmsi/nunjucks-date/badge.svg?branch=master)](https://coveralls.io/r/techmsi/nunjucks-date?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/techmsi/nunjucks-date.svg)](https://greenkeeper.io/)

## Installation

```bash
npm nunjucks-date-filter-locale --save
```

## Usage

```js
// Import the plugin
var nunjucksDate = require("nunjucks-date-filter-locale");

// Define a custom default date format. Any valid format works.
// The date format defaults to "YYYY"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat("MMMM Do YYYY, h:mm:ss a");

// Define a custom locale.
nunjucksDate.setLocale('de_DE');

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
env.addFilter("date", require("nunjucks-date"));
```
