import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';
import NameModal from '../NameModal/NameModal';
import './Header.css';

const Header = ({ onUsernameChange }) => {
  // State variables
  const [showNameModal, setShowNameModal] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleShowNameModal = () => {
    setShowNameModal(true);
  };

  const handleHideNameModal = () => {
    setShowNameModal(false);
  };

  const handleAddAnotherUser = () => {
    handleShowNameModal();
  };

  const handleNameSubmit = (name) => {
    setEnteredName(name);
    setSelectedChannel(null);
    setShowNameModal(false); 
    onUsernameChange(name);
  };

  // UseEffect to show the NameModal on the initial load
  useEffect(() => {
    handleShowNameModal();
  }, []);

  return (
    <header className="custom-header text-dark py-1 fixed-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <img src="logo.png" alt="Company Logo" className="logo" />
          </div>
          <div className="col-4 text-center">
            <h2>MESSAGE BOARD</h2>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-end">
            {enteredName && (
              <p className="user-greeting me-2 mb-0">Hello, {enteredName}!</p>
            )}

            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <FiUser className="user-icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleAddAnotherUser}>
                  Switch to another user
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <NameModal show={showNameModal} onHide={handleHideNameModal} onSubmit={handleNameSubmit} />
    </header>
  );
};

export default Header;
