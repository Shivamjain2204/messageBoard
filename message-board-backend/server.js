// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Set the port for the server to run on
const PORT = 3000;

// In-memory database to store channels and their messages
let channels = {
  Channel1: [],
  Channel2: [],
  Channel3: [],
  Channel4: [],
  Channel5: [],
};

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Endpoint to get a list of available channels
app.get('/channels', (req, res) => {
  // Respond with a JSON array of channel names
  res.json(Object.keys(channels));
});

// Endpoint to get messages for a specific channel
app.get('/messages/:channel', (req, res) => {
  // Extract the channel parameter from the request URL
  const channel = req.params.channel;
  
  // Respond with an array of messages for the specified channel or an empty array if the channel doesn't exist
  res.json(channels[channel] || []);
});

// Endpoint to post a new message to a specific channel
app.post('/:channel', (req, res) => {
  // Extract the channel parameter from the request URL and the message from the request body
  const channel = req.params.channel;
  const message = req.body.message;

  // Check if both channel and message are provided
  if (channel && message) {
    // Add the message to the specified channel
    channels[channel].push(message);
    // Respond with a success message in JSON format
    res.json({ success: true });
  } else {
    // Return an error if the request is invalid
    res.status(400).json({ error: 'Invalid request' });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
