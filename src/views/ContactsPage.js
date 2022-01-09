import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />

        {/* {isLoadingContacts && <h1>Загружаем...</h1>} */}
        <ContactList />
      </Section>
    </>
  );
}
