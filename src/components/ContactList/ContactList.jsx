import { StyledList, StyledUl } from "./StyledList"

export const ContactList = ({ contacts, onClick }) => {
    return (
        <StyledUl>
            {contacts.map(({name, number, id}) =>
                <StyledList key={id}>
                    <p>{name}:{' ' + number}</p>
                    <button onClick={() => onClick(id)}>Delete</button>
                </StyledList>
            )}
        </StyledUl>
    )
}