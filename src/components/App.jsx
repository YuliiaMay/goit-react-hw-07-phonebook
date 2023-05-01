import Section from "./Section/Section";
import Title from "./ContactTitle/ContactTitle";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsFilter from "./ContactsList/Filter";
import ContactsList from "./ContactsList/ContactsList";


export default function App() {
  return (
      <Section>
        <ContactsForm  />
        <Title text="Contacts" />
        <ContactsFilter />
        <ContactsList />
      </Section>    
    );
};
