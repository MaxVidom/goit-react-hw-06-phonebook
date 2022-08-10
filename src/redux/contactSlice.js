import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        deleteContact: (state, action) => {
            const newItems = state.items.filter(contact => contact.id !== action.payload);
            state.items = newItems;
        }
    }

})

export const { addContact, setFilter, deleteContact } = contactSlice.actions;

// Selectors

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
