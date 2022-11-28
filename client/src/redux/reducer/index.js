const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities: [],
    filterContinent: []
};

function reducer(state=initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            };
        case 'GET_COUNTRIES_NAME':
            return {
                ...state,
                countries: action.payload
            };
        case 'GET_DETAIL':
            return {
                ...state,
                countries: action.payload
            };
        case 'POST_ACTIVITY':
            return {
                ...state,
                activities: action.payload
            };
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            };
        case 'SET_SORT':
            const asc = action.payload.asc;
            return {
                ...state,
                countries: state.countries.sort((a, b) => {
                    if(asc) return a.name.localeCompare(b.name)
                    return b.name.localeCompare(a.name)
                })
            };
        case 'FILTER_BY_CONTINENT':
            const allCountries = state.allCountries;
            const filterContinent = action.payload === 'All' ? 
                allCountries : allCountries.filter(
                    c => c.continent === action.payload
                );
            return {
                ...state,
                countries: filterContinent
            };
        default:
            return state;
    }
};

export default reducer;