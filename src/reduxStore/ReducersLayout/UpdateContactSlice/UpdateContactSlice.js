import { createSlice } from '@reduxjs/toolkit'
import * as storage from '../../../utility/LocalStorage/storage.js';
import { successAlert } from '../../../utility/Alerts/ToasterTypes.js';
import { keyRoutes } from '../../../components/RoutePaths/RouteConstant.js';
const refreshPage = () => { window.location.reload(false); }

const initialState = {
    contacts: storage.get('contactListData') || [],
};

export const UpdateContactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        UpdateContact: (state, action) => {
            const updatingArrayOfObject = (contactId, updatedContact, currentContactArray) => {

                let updatedContactArray = null

                for (var index = 0; index < currentContactArray.length; index++) {
                    if (currentContactArray[index].id === contactId) {

                        currentContactArray[index] = updatedContact;
                        updatedContactArray = currentContactArray
                        break; // Stop loop once object is replaced
                    }
                }

                return updatedContactArray;
            }

            let existingArrayOfContacts = storage.get('contactListData') || [];
            let updatedArrayOfContacts = updatingArrayOfObject(action.payload.id, action.payload, existingArrayOfContacts);
            updatedArrayOfContacts.sort((a, b) => a.id - b.id); // Sorting by id
            storage.set('contactListData', updatedArrayOfContacts);
            successAlert("Contact updated successfully");
            window.history.pushState({}, 'ContactList', keyRoutes.CONTACT_LIST);
            refreshPage();
        },
    },
});

export const { UpdateContact } = UpdateContactSlice.actions;

export default UpdateContactSlice.reducer;