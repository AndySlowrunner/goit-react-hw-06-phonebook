import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "./StyledFilter";
import { setFilter } from "Redux/filterSlice";
import { getFilter } from "Redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const handleChange = (e) => {
        const result = dispatch(setFilter(e.target.value));
        console.log(result);
    }

    return (
        <StyledFilter>
            <label>Find contacts by name</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </StyledFilter>
    );
}