import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


axios.defaults.baseURL = "https://64511b10a3221969115af51b.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            console.log(response.data);
            return response.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact", async (name, number) => {
    const response = await axios.post("/contacts", {
        createdAt: new Date(),
        id: nanoid,
        name,
        number
    }, {
        headers: {
            'Content-Type': 'phonebook/json'
        }
        
    });
    return response.data;
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
    const response = await axios.delete("/contacts/:id");
    return response.data;
})


