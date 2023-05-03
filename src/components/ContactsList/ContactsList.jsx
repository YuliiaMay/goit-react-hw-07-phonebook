import React from "react";
import { Contact, DeleteContactBtn } from "./ContactsList.styled";
import { useDispatch, useSelector} from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from "redux/operations";




const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectFilter);
    // console.log(contacts);


    const getFilteredContacts = () => {
        return contacts
            .filter(contact => contact.name.toLowerCase().includes(filterValue))
    }



    return (
        <>
            <ul>
                {
                    getFilteredContacts().map(({ id, name, number }) => {
                        return (
                            <Contact key={id}>
                                <span>{name}</span>
                                <span>{number}</span>
                                <DeleteContactBtn
                                    type="button"
                                    onClick={() => dispatch(deleteContact(id))}
                                
                                >❌</DeleteContactBtn>
                            </Contact>
                        )
                    })
                }
            </ul>            
        </>
    )
};

export default ContactsList;