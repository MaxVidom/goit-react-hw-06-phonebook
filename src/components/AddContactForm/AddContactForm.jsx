import React, { useState } from 'react';
import { addContact, getContacts } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export default function AddContactForm() {
  const [contactName, setaContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const inputName = evt.currentTarget.name;
    const inputValue = evt.currentTarget.value;
    switch (inputName) {
      case 'name':
        setaContactName(inputValue);
        break;
      case 'number':
        setContactNumber(inputValue);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const normalizedName = contactName.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${contactName} is already in contacts`);
      remove();
      return;
    } else if (contactName.trim() === '' || contactNumber.trim() === '') {
      return;
    }
    const contact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    dispatch(addContact(contact));
    remove();
  };

  const remove = () => {
    setaContactName('');
    setContactNumber('');
  };

  return (
    <form action="" onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={contactName}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={contactNumber}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
