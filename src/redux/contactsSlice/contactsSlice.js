import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";

const extraOperations = [fetchContacts, addContact, deleteContact];
const getOperations = (type) => isAnyOf(...extraOperations.map(action => action[type]));

// redusers
const pandingReduser = state => {
    state.isLoading = true;
};

const rejectedReduser = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};

const fulfilledReduser = state => {
    state.isLoading = false;
    state.error = null; 
}

const fetchContactsSuccessReduser = (state, {payload}) => {
    state.items = payload;
};

const addContactsSuccessReduser = (state, {payload}) => {
    state.items.push(payload);
};

const deleteContactsSuccessReduser = (state, {payload}) => {
    const index = state.items.findIndex(contact => contact.id === payload.id);
    state.items.splice(index, 1);   
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsSuccessReduser)
        .addCase(addContact.fulfilled, addContactsSuccessReduser)        
        .addCase(deleteContact.fulfilled, deleteContactsSuccessReduser)
        .addMatcher(getOperations('pending'),pandingReduser)
        .addMatcher(getOperations('rejected'),rejectedReduser)
        .addMatcher(getOperations('fulfilled'),fulfilledReduser)
});


// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
