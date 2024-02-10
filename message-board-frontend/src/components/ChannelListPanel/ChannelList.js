import React from 'react';
import './ChannelList.css';

const ChannelList = ({ channels, onSelect, selectedChannel }) => {
  return (
    <div className="ChannelList">
      <h2 className="custom-title">Channels List</h2>

      <ul className="list-group">
        {channels.map((channel) => (
          <li
            key={channel}
            // Apply styles based on whether the channel is selected or not
            className={`list-group-item list-group-item-action channel-item ${selectedChannel === channel ? 'active' : ''}`}
            onClick={() => onSelect(channel)}>
            {channel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
