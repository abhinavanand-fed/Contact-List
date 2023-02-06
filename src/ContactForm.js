import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
