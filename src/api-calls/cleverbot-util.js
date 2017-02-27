const Cleverbot = require('cleverbot');
const config = require('../../config/config');
const MESSAGE_URL = '/message';

const clev = new Cleverbot({
  key: config.CLEVERBOT_API_KEY
});

module.exports.sendMessage = message => {
  return clev.query(message);
};
