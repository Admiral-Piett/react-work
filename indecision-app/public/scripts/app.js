'use strict';

console.log('this is my app file bitch');

// JSX - JavaScript XML

var template = React.createElement(
  'h1',
  { id: 'jsx-app-id' },
  'Times they be a changin\'!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
