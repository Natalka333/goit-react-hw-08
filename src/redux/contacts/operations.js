import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66cb33b84290b1c4f199bca3.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", contact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        console.log(`Delete contact ID: ${contactId}`);
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

})