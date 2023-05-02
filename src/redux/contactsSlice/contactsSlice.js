import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { fetchContacts, addContact, deleteContact } from "redux/operations";

// const contactsInitialState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     isLoading: false,
//     error: null,
// };

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending](state, action) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;            
        },
        [fetchContacts.rejected](state, {payload}) {
            state.isLoading = false;
            state.error = payload;            
        },
        [addContact.pending](state, action) {
            state.isLoading = true;            
        },
        [addContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;             
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;               
        },
        [deleteContact.pending](state, action) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items = payload; 
        },
        [deleteContact.rejected](state, {payload}) {
            state.isLoading = false;
            state.error = payload;                
        },        
    }
    // reducers: {
    //     createContact(state, {payload}) {
    //         state.contacts.push(payload);
    //     },
    //     removeContact(state, { payload }) {
    //         state.contacts = state.contacts.filter(contact => contact.id !== payload)
    //     },
    //     fetchingInProgress(state) {
    //         state.isLoading = true;
    //     },
    //     fetchingSuccess(state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.contacts = action.payload;
    //     },
    //     fetchingError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // }
});

const persistConfig = {
    key: 'contacts',
    storage
};


// Генератори екшенів
// export const { createContact, removeContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);
