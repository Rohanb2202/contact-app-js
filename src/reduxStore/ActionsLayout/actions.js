import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from "../ApiLayout/api.js"
import * as storage from '../../utility/LocalStorage/storage.js';
import { setAddContactsSync } from '../ReducersLayout/CreateContactSlice/createContactSlice.js';
import { setUpdateContactsSync } from '../ReducersLayout/UpdateContactSlice/UpdateContactSlice.js';

// Thunk for listing contact
export const getContactList = createAsyncThunk("getContactList", async () => {

    const response = await fetch(API.contactListApi);
    const apiData = await response.json();
    const localStorageData = storage.get("contactListData") || []; // Checking if there is data in localStorage

    let result = [...apiData, ...localStorageData]; // Merging the API data with the localStorage data

    return result;

});

// Thunk for creating contact
export const setCreateContactSync = createAsyncThunk('contacts/setCreateContactSync', async (contactData, { dispatch }) => {

    const contacts = storage.get('contactListData') || [];
    contacts.push(contactData);
    contacts.sort((a, b) => a.id - b.id);
    storage.set('contactListData', contacts);
    dispatch(setAddContactsSync(contacts));

    return contacts;

});

// Thunk for Updating contact
export const setUpdateContactSync = createAsyncThunk('contacts/setUpdateContactSync', async (contactData, { dispatch }) => {

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

    let contactListArray = storage.get('contactListData') || [];
    const updatedContactListArray = updatingArrayOfObject(contactData.id, contactData, contactListArray);
    updatedContactListArray.sort((a, b) => a.id - b.id); // Sorting by id
    storage.set('contactListData', updatedContactListArray);
    dispatch(setUpdateContactsSync(updatedContactListArray));

    return updatedContactListArray;

});