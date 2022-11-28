import axios from 'axios';

export function getCountries() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
};

export function getCountriesName(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: 'GET_COUNTRIES_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getDetail(id) {
    return async (dispatch) => {
        let json = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: 'GET_DETAIL',
            payload: json.data
        })
    }
};

export const addActivity = (datA) => {
    return function(dispatch) {
        return axios.post('http://localhost:3001/activity', datA).then((res) => {
            dispatch({
                type: 'POST_ACTIVITY',
                payload: res.data
            })
        })
    }
};

export function getActivities() {
    return async (dispatch) => {
        let json = await axios.get('http://localhost:3001/activity/');
        dispatch({
            type: 'GET_ACTIVITIES',
            payload: json.data
        })
    }
};

export function getCountriesId(id) {
    return async function(dispatch) {
        let json = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({
            type: 'GET_COUNTRIES_DETAIL',
            payload: json.data
        })
    }
};

export function filterCountriesContinent(payload) {
    return {
        type: 'FILTER_BY_CONTINENT',
        payload: {
            asc: payload
        }
    }
};