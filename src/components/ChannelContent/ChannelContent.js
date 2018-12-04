import React from 'react';
import { OFFLINE, ONLINE, AWAY } from '../../actions';

import { MessageContainer } from '../Message/MessageContainer';

export const ChannelContent = ({
  messages,
  channelName,
  status,
  fechStatus
}) => (
  <div>
    <h4>Channel: {channelName}</h4>
    {status === OFFLINE ? (
      <h5>Contacts in the channel will see you as offline</h5>
    ) : null}
    <div>
      {messages.map(message => (
        <div key={message.get('id')}>
          <MessageContainer message={message} />
        </div>
      ))}
    </div>
  </div>
);
