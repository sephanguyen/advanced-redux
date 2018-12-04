import { Message } from './Message';
import { connect } from 'react-redux';
import { userSelector } from '../../selectors';
const mapStateToProps = (state, { message }) => {
  const owner = userSelector(message.get(`owner`))(state);
  return {
    text: message.get(`content`).get(`text`),
    owner: {
      name: owner.get(`fetchStatus`).includes(`FETCHED`)
        ? owner.get(`name`)
        : `[...]`
    }
  };
};

const mapDispatchToProps = dispatch => ({});

export const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
