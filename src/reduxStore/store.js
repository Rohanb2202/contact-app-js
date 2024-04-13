import { configureStore } from '@reduxjs/toolkit';
import contactListReducer from './ReducersLayout/ContactListSlice/contactListSlice';
import CreateContactReducer from './ReducersLayout/CreateContactSlice/createContactSlice';
import UpdateContactReducer from './ReducersLayout/UpdateContactSlice/UpdateContactSlice';

export const store = configureStore({

    reducer: {
        contactList: contactListReducer,
        createContact: CreateContactReducer,
        updateContact: UpdateContactReducer,
    }

});