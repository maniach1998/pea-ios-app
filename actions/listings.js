// ADD_LISTING
export const addListing = (listing) => ({
    type: 'ADD_LISTING',
    listing
});

// REMOVE_LISTING
export const removeListing = ({ id } = {}) => ({
    type: 'REMOVE_LISTING',
    id
});

// EDIT_LISTING
export const editListing = (id,updates) => ({
    type: 'EDIT_LISTING',
    id,
    updates,
});

// SET_LISTINGS
export const setListings = (listings) => ({
    type: 'SET_LISTINGS',
    listings
});