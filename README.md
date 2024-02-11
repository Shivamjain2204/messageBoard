# Message Board Prototype with React and Node.js

This is a prototype for a message board designed for in-house use, built responsive frontend design with React & Bootstrap as a single-page web application and Node.js for the backend. The application allows users to interact with multiple channels, view messages in selected channels, and submit new messages.

At the moment, this prototype can only add new message, editing or deletion of messages is not implemented yet.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager) installed

### Installation

1. Install dependencies for both frontend and backend:
   ```bash
   # Frontend
   cd message-board-frontend
   npm install

   # Backend
   cd message-board-backend
   npm install
   ```

3. Start the application:
   ```bash
   # Frontend (from the 'frontend' directory)
   npm start

   # Backend (from the 'backend' directory)
   node server.js
   ```

4. Access the application in your browser at http://localhost:3000.

## Application Structure

### React Client
- **Client Visuals:**
  - When the application is loaded for the first time, a modal is displayed and it asks for the user name
  - User name is displayed in the header and there is a scope to change the user name by clicking on the user icon dropdown
  - Three panels: Navigation, Message List and Editor
  - Navigation panel displays a list of channels
  - Message list panel displays messages for the selected channel
  - Editor panel allows users to add new messages (hidden when no channel is selected
  - Editor panel has a submit button which is disabled if there is no text in message body
- **Interactions:**
  - Selecting a channel in the navigation panel switches to that channel and shows messages in that channel
  - Entering text in the editor and clicking submit adds a message to the selected channel
  - When a message is submitted and added to a channel, current user name is also added to the message, so that one can know the     author of a message
  - Submitting the editor clears the input text area
  - Switching channels clears the input text area
- **State:**
  - Channel list is loaded once on application startup
  - Initially, no channel is selected
  - Selected channel and messages are loaded from remote on channel selection and updated to the screen

### Node.js Backend
1. Channel and message storage is an in-memory database (global variable).
2. On server start, storage is populated with a fixed set of empty channels.
3. **Endpoints:**
   - `GET /channels`: Query channels
   - `GET /messages/:channel`: Query channel's messages
   - `POST /:channel`: Submit new messages to a channel

## Notes

- No authentication or user identity management is implemented.
- Editing messages is not required; only creation is supported.
- Messages are immediately available for other users upon submission.
- Error handling is not implemented in this prototype.
- This is a simplified implementation with minimal dependencies.

## Future additions

- Add capabilities to edit and delete the messages from the channels