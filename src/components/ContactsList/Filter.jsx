import React from "react";
import { FilterBlock, FilterInput, Label } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice/filterSlice";


const ContactsFilter = () => {
    const dispatch = useDispatch();
    const onFilterChange = ({target: {value}}) => {
        const filterValue = value;
        dispatch(setFilter(filterValue));
    }

    return (
        <FilterBlock>
            <Label htmlFor="contacts-filter">Search contact by name</Label>
            <FilterInput
                id="contacts-filter"
                type="text"
                name="filter"
                onChange={onFilterChange}
            />
        </FilterBlock>
    )
};


export default ContactsFilter;