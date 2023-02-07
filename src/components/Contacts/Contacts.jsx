import PropTypes from 'prop-types';
import ContactItem from './ContactItem'
import {BtnDelete, ContactList} from './Contacts.styled'


const Contacts = ({ contacts, filter, filteredContacts, deleteContact }) => {
  let arrayData = filter === '' ? contacts : filteredContacts();
  const Contact = arrayData.map(({ name, id, number }) =>  
  <ContactItem key={id} id={id} name={name} number={number}><BtnDelete onClick={e => deleteContact(e)}>Delete</BtnDelete></ContactItem>)

  return (
    <ContactList>
      {Contact}
    </ContactList>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;