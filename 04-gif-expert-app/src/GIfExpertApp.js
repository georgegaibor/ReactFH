import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Piece']);
    const addCategories = ['JJK'];
    /*
    const handleAdd = () => {
        //const updateArr = categories.concat(addCategories);
        const updateArr = [...categories,...addCategories];
        setCategories(updateArr);
    };
    */

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr />
        <ol>
            {
                categories.map( cat => {
                    return <GifGrid 
                    key = { cat }
                    category= { cat }
                    />
                })
            }
        </ol>
        </>
    );



}



export default GifExpertApp;