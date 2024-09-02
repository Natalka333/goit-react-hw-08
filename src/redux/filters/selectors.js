import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../../redux/contacts/selectors'

export const selectNameFilter = state => state.filter.name;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)