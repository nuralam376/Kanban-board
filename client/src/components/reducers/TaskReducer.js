export const initialState = {
    loading : true,
    tasks : [],
    error : ""
};

export const taskReducer = (state = initialState, action) => {
   switch(action.type)
   {
        case "success" : 
            return {
                loading : false,
                tasks : action.payload,
                error : ""
            };
        case "failure" : 
            return {
                loading : false,
                tasks : [],
                error : "Something went wrong"
            };
        default : 
            return state;
   }

    
};