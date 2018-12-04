import { Message } from './Message';
import { connect } from 'react-redux';
const mapStateToProps = (state, { message }) => {
  return {
    text: message.get(`content`).get(`text`),
    owner: {
      name: message.get(`owner`)
    }
  };
};

const mapDispatchToProps = dispatch => ({});

export const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
