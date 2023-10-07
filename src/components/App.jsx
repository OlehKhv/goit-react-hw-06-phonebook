import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'components/Contacts/contactsSlice';
import { setFilter } from 'components/Filter/filterSlice';
import { Main, MainTitle } from './App.styled';

export const App = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    const handleAddContact = contact => {
        dispatch(addContact(contact));
    };

    const handleDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    const handleFilterContacts = ({ target: { value } }) => {
        dispatch(setFilter(value));
    };

    const getFilteredContacts = () => {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <Main>
            <MainTitle>Phonebook</MainTitle>
            <Form handleAddContact={handleAddContact} />
            <Filter handleFilterContacts={handleFilterContacts} />
            <Contacts
                contacts={getFilteredContacts()}
                handleDeleteContact={handleDeleteContact}
            />
        </Main>
    );
};
