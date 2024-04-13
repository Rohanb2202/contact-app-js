import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from "../ApiLayout/api.js"
import * as storage from '../../utility/LocalStorage/storage.js';

export const getContactList = createAsyncThunk("getContactList", async () => {
    const response = await fetch(API.contactListApi);
    const apiData = await response.json();
    const localStorageData = storage.get("contactListData") || []; // Checking if there is data in localStorage

    let result = [...apiData, ...localStorageData]; // Merging the API data with the localStorage data

    return result;
});