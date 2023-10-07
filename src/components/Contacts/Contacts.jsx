import PropTypes from 'prop-types';
import { Notification } from './Notification';
import {
    ContactItem,
    ContactText,
    DeleteButton,
    SecondTitle,
} from './Contacts.styled';

export const Contacts = ({ contacts, handleDeleteContact }) => {
    return (
        <div>
            <SecondTitle>Contacts</SecondTitle>
            {contacts.length ? (
                <>
                    <ul>
                        {contacts.map(({ id, name, number }) => {
                            return (
                                <ContactItem key={id}>
                                    <ContactText>
                                        🧑 {name}: {number}
                                    </ContactText>
                                    <DeleteButton
                                        onClick={() => handleDeleteContact(id)}
                                    >
                                        ❌ Delete
                                    </DeleteButton>
                                </ContactItem>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <Notification message="Your phone book is empty!" />
            )}
        </div>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Contacts;
