import { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

        const value = inputValue.trim();
        if (value.length < 1) return;

        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type='text'
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}

AddCategory.prototypes = {
    onNewCategory: PropTypes.func.isRequired
}