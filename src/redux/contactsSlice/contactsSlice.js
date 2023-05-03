import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";

// const handlePending = state => {
//     state.isLoading = true;
// };

// const handleRejected= (state, {payload}) => {
//     state.isLoading = false;
//     state.error = payload;   
// };

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
            items: [],
            isLoading: false,
            error: null
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, (state, {payload}) => {
            state.items = payload;            
        })
        .addCase(addContact.fulfilled, (state, {payload}) => {
            state.items.push(payload);            
        })        
        .addCase(deleteContact.fulfilled, (state, { payload }) => {
            const index = state.items.findIndex(contact => contact.id === payload.id);
            state.items.splice(index, 1);        
        })
        .addMatcher(
            isAnyOf(
                fetchContacts.pending,
                addContact.pending, 
                deleteContact.pending, 
            ), state => {
                state.isLoading = true;
            }
        )
        .addMatcher(
            isAnyOf(
                fetchContacts.rejected,
                addContact.rejected, 
                deleteContact.rejected, 
            ), (state, {payload}) => {
                state.isLoading = false;
                state.error = payload; 
            }
        )
        .addMatcher(
            isAnyOf(
                fetchContacts.fulfilled,
                addContact.fulfilled, 
                deleteContact.fulfilled, 
            ), state => {
                state.isLoading = false;
                state.error = null; 
            }
        )
        
});


// Генератори екшенів
// export const { createContact, removeContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
