export default (listings, { text, need, listingType, priceRange }) => {
    return listings.filter((listing) => {
        const textMatch = listing.name.toLowerCase().includes(text.toLowerCase());

        let needMatch = true;
        if (need.length > 1) {
            needMatch = need.includes(listing.need);
        } else if (need.length === 1) {
            needMatch = listing.need.includes(need);
        }

        let listingTypeMatch = true;
        if (listingType.length > 1) {
            listingTypeMatch = listingType.includes(listing.listingType);
        } else if (listingType.length === 1) {
            listingTypeMatch = listing.listingType.includes(listingType);
        }
        
        let priceMatch = true;
        if (priceRange !== []) {
            const [ priceLower, priceHigher ] = priceRange;
            if (priceLower === null && priceHigher === null) {
                priceMatch = true;
            } else if (priceLower === 0 && priceHigher === null) {
                priceMatch = true;
            } else {
                priceMatch = listing.price >= priceLower && listing.price <= priceHigher;
            }
        }

        return textMatch && needMatch && listingTypeMatch && priceMatch;
    });
};