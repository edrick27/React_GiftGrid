import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories((categories) => [newCategory, ...categories]);
    }


    return (
        <>
            {/*titulo*/}
            <h1>GifExpertAPP</h1>

            {/*Input*/}
            <AddCategory onNewCategory={(event) => onAddCategory(event)} />

            {/*Listado*/}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
