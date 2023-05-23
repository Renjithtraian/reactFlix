
export const initialState = {
    favourites : []
}

export const reducer = (stateValue,{type,payload}) => {
    switch(type){
        case "ADD_FAVOURITE":
            return {...stateValue,favourites:[...stateValue.favourites,payload]}
    }
    return stateValue;
}