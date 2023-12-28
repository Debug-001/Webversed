import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, cardTitle }) => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedCard, setSelectedCard] = useState(cardTitle);

  const handleInputChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'contactNumber') setContactNumber(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Contact Number:', contactNumber);
    console.log('Selected Card:', selectedCard);
    onClose(); 
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup">
          <h2>{selectedCard}</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={handleInputChange}
          />
          <select onChange={(e) => setSelectedCard(e.target.value)}>
            <option value="Card 1">Card 1</option>
            <option value="Card 2">Card 2</option>
            <option value="Card 3">Card 3</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default Popup;
