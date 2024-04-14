import { createSlice } from '@reduxjs/toolkit'
import { setUpdateContactSync } from '../../ActionsLayout/actions.js';
import * as storage from '../../../utility/LocalStorage/storage.js';
import { keyRoutes } from '../../../components/RoutePaths/RouteConstant.js';
import { successAlert } from '../../../utility/Alerts/ToasterTypes.js';
const refreshPage = () => { window.location.reload(false); }

const initialState = {
    contacts: storage.get('contactListData') || [],
};

export const UpdateContactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setUpdateContactsSync: (state, action) => {
            state.contacts = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setUpdateContactSync.fulfilled, (state, action) => {
            window.history.pushState({}, 'ContactList', keyRoutes.CONTACT_LIST);
            refreshPage();
            successAlert("Contact updated successfully");
        });
    }
});

export const { setUpdateContactsSync } = UpdateContactSlice.actions;
export default UpdateContactSlice.reducer;