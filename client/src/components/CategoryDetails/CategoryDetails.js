import React from 'react';
import "./CategoriesDetails.css";

function CategoryDetails({category}) {
    const {name} = category;
    return (
        <p className = "categoryDetails">
            <span className = "categoryName">    
             {name}
            </span>
        </p>
    )
}

export default CategoryDetails
