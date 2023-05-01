import React from "react";
import { Contact, DeleteContactBtn } from "./ContactsList.styled";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { removeContact } from "../../redux/contactsSlice/contactsSlice";


const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    const getFilteredContacts = () => {
        return contacts
            .filter(contact => contact.name.toLowerCase().includes(filterValue))
    }


    return (
        <ul>
            {
                getFilteredContacts().map(({ id, name, number }) => {
                    return (
                        <Contact key={id}>
                            <span>{name}</span>
                            <span>{number}</span>
                            <DeleteContactBtn
                                type="button"
                                onClick={() => {
                                    dispatch(removeContact(id));
                                }}
                            >❌</DeleteContactBtn>
                        </Contact>
                    )
                })
            }
        </ul>
    )
};

export default ContactsList;