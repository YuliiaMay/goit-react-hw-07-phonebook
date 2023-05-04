import React from "react";
import { ContactsBox } from "./ContactsList.styled";
import { useDispatch, useSelector} from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "redux/operations";
import ContactItem from "components/ContactItem/ContactItem";




const ContactsList = () => {
    const dispatch = useDispatch();
    const visableContacts = useSelector(selectFilteredContacts);

    const handleDelete = id => dispatch(deleteContact(id));

    return (
        <ContactsBox>
            <ul>
                {
                    visableContacts.map(({ id, name, number }) => 
                        <ContactItem 
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            onClick={handleDelete}
                        />
                    )
                }
            </ul>            
        </ContactsBox>
    )
};

export default ContactsList;