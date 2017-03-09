import { connect } from 'react-redux';
import MessageBox from '../../presentational/MessageBox/MessageBox';

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const MessageContainer = connect(mapStateToProps)(MessageBox);

export default MessageContainer;
