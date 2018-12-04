import { createSelector } from 'reselect';

export const channelSelector = id =>
  createSelector(
    state => state.get(`channels`),
    channels => {
      return channels.find(channel => channel.get(`id`) === id);
    }
  );
