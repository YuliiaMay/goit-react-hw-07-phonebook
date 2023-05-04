import React from "react";
import { Contact, DeleteContactBtn } from "./ContactsList.styled";
import { useDispatch, useSelector} from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "redux/operations";




const ContactsList = () => {
    const dispatch = useDispatch();
    const visableContacts = useSelector(selectFilteredContacts);

    const handleDelete = id => dispatch(deleteContact(id));

    return (
        <>
            <ul>
                {
                    visableContacts.map(({ id, name, number }) => {
                        return (
                            <Contact key={id}>
                                <span>{name}</span>
                                <span>{number}</span>
                                <DeleteContactBtn
                                    type="button"
                                    onClick={() => handleDelete(id)}
                                
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