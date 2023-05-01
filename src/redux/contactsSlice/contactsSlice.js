import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsInitialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        createContact(state, {payload}) {
            state.contacts.push(payload);
        },
        removeContact(state, { payload }) {
            state.contacts = state.contacts.filter(contact => contact.id !== payload)
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage
};


// Генератори екшенів
export const { createContact, removeContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);
