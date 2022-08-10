import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {visibleContacts &&
          visibleContacts.map(({ id, name, number }, i) => {
            return (
              <li key={id}>
                {i + 1}) {name}: {number};
                <button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
