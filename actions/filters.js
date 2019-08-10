// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_NEED_FILTER
export const setNeedFilter = (need = '') => ({
    type: 'SET_NEED_FILTER',
    need
});

// SET_LISTING_TYPE_FILTER
export const setListingTypeFilter = (listingType = '') => ({
    type: 'SET_LISTING_TYPE_FILTER',
    listingType
});

// SET_PRICE_FILTER
export const setPriceFilter = (priceRange = [0, Infinity]) => ({
    type: 'SET_PRICE_FILTER',
    priceRange
});