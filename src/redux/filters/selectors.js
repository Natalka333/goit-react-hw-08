import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../../redux/contacts/selectors'

export const selectFilterName = state => state.filter;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterName],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)