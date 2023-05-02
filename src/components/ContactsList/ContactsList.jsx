import React, { useEffect } from "react";
import { Contact, DeleteContactBtn } from "./ContactsList.styled";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter, getisLoading, getError } from "../../redux/selectors";
import { removeContact } from "../../redux/contactsSlice/contactsSlice";
import { fetchContacts } from "redux/operations";



const ContactsList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getisLoading);
    const error = useSelector(getError);

    const filterValue = useSelector(getFilter);
    console.log(contacts);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    // const getFilteredContacts = () => {
    //     return contacts
    //         .filter(contact => contact.name.toLowerCase().includes(filterValue))
    // }


    return (
        <>
            {isLoading && <p>Loading tasks...</p>}
            {error && <p>{error}</p>}
            {/* {contacts.length > 0 &&
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
            } */}
        </>
    )
};

export default ContactsList;