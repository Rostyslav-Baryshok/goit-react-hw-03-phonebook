import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, Title } from 'Container/Container';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filtrationContacts = value => {
    const filterNormalize = value.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  handleSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        alert(`${name} is already in contact`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      }
    });
  };
  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return { contacts: [...contactsAfterDelete] };
    });
  };
  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phone Book</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <Title>Contacts</Title>
        <Filter
          title="Find contact by name"
          onChange={this.handleFilterChange}
          value={filter}
        />
        <ContactList
          filtrationContacts={this.filtrationContacts(filter)}
          onDelete={this.contactDelete}
        />
      </Container>
    );
  }
}
