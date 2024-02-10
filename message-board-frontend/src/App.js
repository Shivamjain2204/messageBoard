import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ChannelListPanel from './components/ChannelListPanel/ChannelList';
import MessagesListPanel from './components/MessagesListPanel/MessagesList';
import EditorPanel from './components/EditorPanel/EditorList';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  // State variables
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [channelMessages, setChannelMessages] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [showNameModal, setShowNameModal] = useState(false);

  useEffect(() => {
    // Fetch initial channel list
    fetch('http://localhost:3000/channels')
      .then(response => response.json())
      .then(data => setChannels(data))
      .catch(error => console.error('Error fetching channels:', error));
  }, []);

  const handleChannelSelect = (channel) => {
    if (channelMessages[channel]) {
      setMessages(channelMessages[channel]);
    } else {
      fetch(`http://localhost:3000/messages/${channel}`)
        .then(response => response.json())
        .then(data => {
          setChannelMessages({
            ...channelMessages,
            [channel]: data,
          });
          setMessages(data);
        })
        .catch(error => console.error(`Error fetching messages for ${channel}:`, error));
    }

    setSelectedChannel(channel);
  };

  const handleSendMessage = () => {
    fetch(`http://localhost:3000/${selectedChannel}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const updatedMessages = [...(channelMessages[selectedChannel] || []), `${newMessage} - ${enteredName}`];
          setChannelMessages({
            ...channelMessages,
            [selectedChannel]: updatedMessages,
          });
          setMessages(updatedMessages);
          setNewMessage('');
        } else {
          console.error('Error submitting message');
        }
      })
      .catch(error => console.error('Error submitting message:', error));
  };

  // Callback function to receive the username change from Header.js
  const handleUsernameChange = (name) => {
    setEnteredName(name);
  };

  return (
    <div>
      <Header onUsernameChange={handleUsernameChange} />
      <div className="container-fluid main-contetnt text-center">
        <div className="row full-height-section">
          <div className="col-md-3 bg-custom-light full-height-background">
            <ChannelListPanel channels={channels} onSelect={handleChannelSelect} selectedChannel={selectedChannel} />
          </div>
          <div className="col-md-6 bg-custom-info full-height-background">
            <MessagesListPanel messages={messages} />
          </div>
          <div className="col-md-3 bg-custom-dark full-height-background">
            {selectedChannel && (
              <EditorPanel
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onSubmit={handleSendMessage}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

