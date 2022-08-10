import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  return (
    <div>
      <h1>Phone Book</h1>
      <AddContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
