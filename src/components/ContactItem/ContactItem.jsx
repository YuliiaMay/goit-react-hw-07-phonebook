import { Contact, ContactInfo, DeleteContactBtn, Name, Number } from "./ContactItem.styled";
import { AiTwotoneDelete } from "react-icons/ai";

const ContactItem = ({id, name, number, onClick}) => {
    return (
        <Contact>
            <ContactInfo>
                <Name>{name}</Name>
                <Number>{number}</Number>
            </ContactInfo>


            <DeleteContactBtn
                type="button"
                onClick={() => onClick(id)}
            >
                <AiTwotoneDelete size={22} />
            </DeleteContactBtn>
        </Contact>
    )
};

export default ContactItem;