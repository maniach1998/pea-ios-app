// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    need: [],
    listingType: [],
    priceRange: [0, Infinity],
};

export default (state = filtersReducerDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        
        case 'SET_NEED_FILTER':
            return {
                ...state,
                need: action.need
            };

        case 'SET_LISTING_TYPE_FILTER':
            return {
                ...state,
                listingType: action.listingType
            };
        
        case 'SET_PRICE_FILTER':
            return {
                ...state,
                priceRange: action.priceRange
            };

        default:
            return state;
    }
}