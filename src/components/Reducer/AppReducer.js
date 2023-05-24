
export const initialState = {
    favourites : []
}

export const reducer = (stateValue,{type,payload}) => {
    switch(type){
        case "ADD_FAVOURITE":
            return {...stateValue,favourites:[...stateValue.favourites,payload]}
        case "REMOVE_FAVOURITE":
            return {...stateValue,favourites:stateValue.favourites.filter(item =>item.id !== payload)}
        default:
            return stateValue;    
    }
    return stateValue;
}