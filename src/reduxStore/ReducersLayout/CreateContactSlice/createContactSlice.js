import { createSlice } from '@reduxjs/toolkit'
import { setCreateContactSync } from '../../ActionsLayout/actions.js';
import * as storage from '../../../utility/LocalStorage/storage.js';
import { keyRoutes } from '../../../components/RoutePaths/RouteConstant.js';
import { successAlert } from '../../../utility/Alerts/ToasterTypes.js';
const refreshPage = () => { window.location.reload(false); }

const initialState = {
    contacts: storage.get('contactListData') || [],
};

export const CreateContactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setAddContactsSync: (state, action) => {
            state.contacts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCreateContactSync.fulfilled, (state, action) => {
            window.history.pushState({}, 'ContactList', keyRoutes.CONTACT_LIST);
            refreshPage();
            successAlert("Contact created successfully");
        });
    }
});

export const { setAddContactsSync } = CreateContactSlice.actions;
export default CreateContactSlice.reducer;