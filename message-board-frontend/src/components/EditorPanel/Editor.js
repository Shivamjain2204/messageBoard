import React from 'react';
import './EditorList.css';

const Editor = ({ value, onChange, onSubmit }) => {
  // Determine whether the submit button should be enabled based on the message length
  const isButtonEnabled = value.trim().length > 0;

  return (
    <div className="Editor">
      <h2 className="custom-title">Add Your Message</h2>

      <textarea className="custom-textarea" placeholder="Start typing..." value={value} onChange={onChange} />

      <button
        // Use conditional classes to change button style based on button state
        className={`btn ${isButtonEnabled ? 'btn-success' : 'btn-secondary'} custom-submit-button`}
        onClick={onSubmit}
        // Disable the button if the message is empty
        disabled={!isButtonEnabled}>
        Submit
      </button>
    </div>
  );
};

export default Editor;
