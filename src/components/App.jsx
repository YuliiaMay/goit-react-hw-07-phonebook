import Section from "./Section/Section";
import Title from "./ContactTitle/ContactTitle";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsFilter from "./ContactsList/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";


export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Section>
        <ContactsForm  />
        <Title text="Contacts" />
        <ContactsFilter />
        
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactsList />}
        
      </Section>    
    );
};
