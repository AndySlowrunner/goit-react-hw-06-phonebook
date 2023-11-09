import { useDispatch, useSelector } from "react-redux"
import { StyledList, StyledUl } from "./StyledList"
import { getContacts } from "Redux/selectors"
import { deleteContact } from "Redux/contactsSlice";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();


    return (
        <StyledUl>
            {contacts.map(({name, number, id}) =>
                <StyledList key={id}>
                    <p>{name}:{' ' + number}</p>
                    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </StyledList>
            )}
        </StyledUl>
    )
}