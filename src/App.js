import React, {
  Component,
} from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'Components/Section/Section';
import { Container } from 'Components/Container/Container';
import { Title } from 'Components/Title/Title';
import { ContactForm } from 'Components/Form/Form';
import { Filter } from 'Components/Filter/Filter';
import { ContactsList } from 'Components/ContactList/ContactsList';

import toast, {
  Toaster,
} from 'react-hot-toast';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
    filter: '',
  };

  componentDidMount() {
    const Contacts = JSON.parse(
      localStorage.getItem('contacts'),
    );

    Contacts &&
      this.setState({
        contacts: Contacts,
      });
  }

  componentDidUpdate(prevState) {
    this.state.contacts !==
      prevState.contacts &&
      localStorage.setItem(
        'contacts',
        JSON.stringify(
          this.state.contacts,
        ),
      );
  }

  checkContact = (name, number) => {
    const { contacts } = this.state;

    const includedName = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        name.toLowerCase(),
    );

    const includedNumber =
      contacts.find(
        contact =>
          contact.number.replace(
            /[^0-9]/g,
            '',
          ) ===
          number.replace(/[^0-9]/g, ''),
      );

    if (includedName) {
      return toast(
        `${name} is already in contacts`,
      );
    }

    if (includedNumber) {
      return toast(
        `${number} is already in contacts`,
      );
    }
  };

  handleFormSubmit = ({
    name,
    number,
  }) => {
    const includedContact =
      this.checkContact(name, number);

    if (includedContact) {
      return;
    }
    const id = nanoid();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id, name, number },
      ],
    }));
  };

  handleChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts:
        prevState.contacts.filter(
          contact =>
            contact.id !== contactId,
        ),
    }));
  };

  render() {
    const { contacts, filter } =
      this.state;
    const normalizeFilter =
      filter.toLowerCase();

    const foundContacts =
      contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(normalizeFilter),
      );

    return (
      <Section>
        <Container>
          <Title title={'Phonebook'} />
          <ContactForm
            onSubmit={
              this.handleFormSubmit
            }
          />
          <Toaster />
          <Title title={`Contacts`} />
          <Filter
            value={filter}
            onChange={
              this.handleChangeFilter
            }
          />
          <ContactsList
            contacts={foundContacts}
            onDeleteContact={
              this.deleteContact
            }
          />
        </Container>
      </Section>
    );
  }
}

export default App;
