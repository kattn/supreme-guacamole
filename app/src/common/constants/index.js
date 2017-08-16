let settings;

try {
  settings = require('./constants.js');
} catch (error) {
  console.warn('`app/src/constants/constants.js` not configured, using default.');
  settings = require('./constants.example.js');
}

export default settings;
