import React from 'react';
import '../assets/css/Home.scss'

function CopyToClipboard({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
        // Optionally you can provide feedback to the user, e.g., a toast message
      })
      .catch(err => {
        console.error('Failed to copy text to clipboard:', err);
        // Handle errors, e.g., show an error message to the user
      });
  };

  return (
    <button className='copy' onClick={handleCopy}>COPY</button>
  );
}

export default CopyToClipboard;
