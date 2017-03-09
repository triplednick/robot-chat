import axios from 'axios';

/**
 * Make an axios api call and return the promise
 * @param { String } - The message we want to send to the cleverbot API
 * @return { Promise } - A promise object that will eventually contain our response message.
 */
const callServer = message => {
  return axios.post('/message', {
    message: message
  });
};

export { callServer };
