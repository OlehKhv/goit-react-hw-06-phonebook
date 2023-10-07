import { contactsReducer } from 'components/Contacts/contactsSlice';
import { filterReducer } from 'components/Filter/filterSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});
