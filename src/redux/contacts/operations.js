import axios from "axios";
import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        // toast.success('Contacts successefully loaded!');
        return response.data;
    } catch (error) {
        toast.error('Error loading contacts!');
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", contact);
        toast.success('Contact added successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error adding contact!');
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        toast.success('Contact successfully deleted!');
        return response.data;
    } catch (error) {
        toast.error('Error deleting contact!');
        return thunkAPI.rejectWithValue(error.message);
    }
});