import React from 'react';

import { connect } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { fromJS } from 'immutable';
import { openContactChannel } from '../../actions';
import { userSelector } from '../../selectors';

const mapStateToProps = (state, { id }) => {
  // todo... add selector here
  const contact = userSelector(id)(state);
  return {
    name: contact.get(`name`),
    id: contact.get(`id`),
    status: contact.get(`status`)
  };
};

const mapDispatchToProps = dispatch => ({
  openChannel(id) {
    dispatch(openContactChannel(id));
  }
});

export const ContactListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListItem);
