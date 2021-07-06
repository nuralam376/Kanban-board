export const initialState = {
    loading : true,
    categories : [],
    error : ""
};

export const categoryReducer = (state = initialState,action) => {
    switch(action.type)
    {
        case "success" : 
            return {
                loading : false,
                categories : action.payload,
                error : ""
            };
        case "failure" : 
            return {
                loading : false,
                categories : [],
                error : "Something went wrong"
            };
        default : 
            return state;
    }
};

