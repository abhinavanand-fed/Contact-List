import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = contact => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  return (
    <div className="app">
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
