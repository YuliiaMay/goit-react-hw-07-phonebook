import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { fetchContacts, addContact, deleteContact } from "redux/operations";

// const handlePending = state => {
//     state.isLoading = true;
// };

// const handleRejected= (state, {payload}) => {
//     state.isLoading = false;
//     state.error = payload;
// };

const extraOperations = [fetchContacts, addContact, deleteContact];
const getOperations = (type) => extraOperations.map(action => action[type]);

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
            isAnyOf(...getOperations('pending')),
            state => {
                state.isLoading = true;
            }
        )
        .addMatcher(
            isAnyOf(...getOperations('rejected')),
            (state, { payload }) => {
                state.isLoading = false;
                state.error = payload; 
            }
        )
        .addMatcher(
            isAnyOf(...getOperations('fulfilled')),
            state => {
                state.isLoading = false;
                state.error = null; 
            }
        )
        
});


// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
