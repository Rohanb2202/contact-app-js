import { createSlice } from '@reduxjs/toolkit'
import * as storage from '../../../utility/LocalStorage/storage.js';
import { successAlert } from '../../../utility/Alerts/ToasterTypes.js';
import { keyRoutes } from '../../../components/RoutePaths/RouteConstant.js';
const refreshPage = () => { window.location.reload(false); }

const initialState = {
    contacts: storage.get('contactListData') || [],
};

export const CreateContactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        CreateContact: (state, action) => {
            state.contacts.push(action.payload);
            state.contacts.sort((a, b) => a.id - b.id); // Sorting by id
            storage.set('contactListData', state.contacts);
            successAlert("Contact created successfully");
            window.history.pushState({}, 'ContactList', keyRoutes.CONTACT_LIST);
            refreshPage();
        },
    },
});

export const { CreateContact } = CreateContactSlice.actions;

export default CreateContactSlice.reducer;