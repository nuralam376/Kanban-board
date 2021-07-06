import axios from "axios";
import React, { useEffect, useReducer } from 'react';
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import { categoryReducer, initialState } from "../reducers/CategoryReducer";
import "./Categories.css";

function Categories() {
    const [categoryState, categoryDispatch] = useReducer(categoryReducer,initialState);

    const getCategories = async () => {
        try{
            const response = await axios.get("/categories");
            categoryDispatch({
                type : "success",
                payload : response.data
            });
        }
        catch(err)
        {
            categoryDispatch({
                type : "failure",
            });
        }
    };

    useEffect(() => {
        getCategories();
    },[]);   
    
    const {categories, loading, error} = categoryState;

    return (
        <div className = "categories">
            {loading && <h1>Loading....</h1>}
            {categories.map(category => <CategoryDetails key = {category._id} category = {category}/>)}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Categories
