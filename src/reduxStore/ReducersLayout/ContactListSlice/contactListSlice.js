import { createSlice } from '@reduxjs/toolkit'
import { getContactList } from '../../ActionsLayout/actions'

const initialState = {

    isLoading: false,
    error: false,
    contactListData: [],

}

const contactListSlice = createSlice({

    name: 'contactList',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContactList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getContactList.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.contactListData.push(action.payload);
                state.contactListData = action.payload;
            })
            .addCase(getContactList.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
    }
})

export const { getContactSlice } = contactListSlice.actions;

export default contactListSlice.reducer;