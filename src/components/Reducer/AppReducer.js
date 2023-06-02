
export const initialState = {
    page : 1,
    favourites : [],
}

export const reducer = (stateValue,{type,payload}) => {
    switch(type){
        case "ADD_FAVOURITE":
            return {...stateValue,favourites:[...stateValue.favourites,payload]}
        case "REMOVE_FAVOURITE":
            return {...stateValue,favourites:stateValue.favourites.filter(item =>item.id !== payload)}
        case "NEXT_PAGE":
            return {...stateValue,page:stateValue.page+1}   
        case "PREV_PAGE":
            return {...stateValue,page:stateValue.page-1}     
        default:
            return stateValue;    
    }
    return stateValue;
}