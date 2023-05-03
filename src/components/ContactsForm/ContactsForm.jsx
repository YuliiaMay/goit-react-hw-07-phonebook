import { nanoid } from "@reduxjs/toolkit";
import { Form, Title, ContactFormLabel, ContactInput, AddContactBtn } from "./ContactsForm.styled";
import { useDispatch, useSelector } from "react-redux";
// import { createContact } from "../../redux/contactsSlice/contactsSlice";
import { selectContacts } from "redux/selectors";
import { useState } from "react";
import { addContact } from "redux/operations";

const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts);


    const handleSubmit = (e) => {
        e.preventDefault()

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            return alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase())) {
            return alert(`This number is already in contacts.`);
        }

        const newContact = {
            id: nanoid(),
            name,
            number
        };

        dispatch(addContact(newContact));

        reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

    const handleChange = e => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        }
        if (e.target.name === 'number') {
            setNumber(e.target.value);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Title>Phonebook</Title>
            <ContactFormLabel htmlFor="contact-name">Name</ContactFormLabel>
            <ContactInput
                id="contact-name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />

            <ContactFormLabel htmlFor="contact-number">Number</ContactFormLabel>
            <ContactInput
                id="contact-number"
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <AddContactBtn type="submit">
                ADD
            </AddContactBtn>
        </Form>
    )
};

export default ContactsForm;