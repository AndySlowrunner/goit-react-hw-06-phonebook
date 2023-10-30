import { StyledFilter } from "./StyledFilter";

export const Filter = ({ value, onChange }) => {
    return (
        <StyledFilter>
            <label>Find contacts by name</label>
            <input
                type="text"
                value={value}
                onChange={evt => onChange(evt.target.value)}
            />
        </StyledFilter>
    );
}