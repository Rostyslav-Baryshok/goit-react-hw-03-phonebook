import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ filtrationContacts, onDelete }) => {
  return (
    <ul>
      {filtrationContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactItem.propTypes = {
  filtrationContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
