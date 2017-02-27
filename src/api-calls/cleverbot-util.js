const Cleverbot = require('cleverbot');
const config = require('../../config/config');
const MESSAGE_URL = '/message';

//Create a new CleverBot instance that we can use to interact with API
const clev = new Cleverbot({
  key: config.CLEVERBOT_API_KEY
});

/**
 * Make an axios api call and return the promise
 * @param { String } - The message we want to send to the cleverbot API
 * @return { Promise } - A promise object that will eventually contain our response message.
 * @public
 */
module.exports.sendMessage = message => {
  return clev.query(message);
};
