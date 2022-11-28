const axios = require('axios');
const { Country } = require('./db.js');

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(e => {
        return {
            name: e.name.common,
            cca3: e.cca3,
            id: e.cca3,
            img: e.flags[0],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : 'No capital',
            subregion: e.subregion,
            area: e.area,
            population: e.population
        }
    });
    return apiInfo
};

async function loadDb() {
    try {
        const countries = await getApiInfo();
        await Promise.all(
            countries.map(async (e) => {
                await Country.create(e)
            })
        )
    } catch (error) {
        console.log(error)
    }
};

module.exports = { loadDb };