const { Country, Activity } = require('../db.js');
const axios = require('axios');
const { loadDb } = require('../loadDB.js');

const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attibutes: ['name'],
            through: {
                attibutes: []
            }
        }
    })
};

const getAllCountries = async () => {
    const dbInfo = await getDbInfo();
    if(!dbInfo.length) {
        await loadDb();
        return await getDbInfo()
    }
    return dbInfo
};

const getCountries = async (req, res) => {
    let countries = await getAllCountries();
    try {
        countries.length ? 
        res.status(200).json(countries) : 
        res.status(404).send('Not found...')
    } catch (error) {
        res.status(500).send(error)
    }
};

const getCountryById =  async (req, res) => {
    const { id } = req.params;
    let countries = await getAllCountries()
    if(id) {
        let country = countries.filter(e => e.id === id);
        country.length ? 
        res.status(200).json(country) : 
        res.status(404).send('Not found...')
    }
};

const getCountryByName = async (req, res) => {
    const { name } = req.query;
    if(name) {
        try {
            let countries = await getAllCountries();
            let country = countries.filter(e =>
                e.name.toLowerCase().includes(name.toLowerCase())
            );
            country.length ? 
            res.status(200).json(country) : 
            res.status(404).send('Not found...')
        } catch (error) {
            res.status(500).send(error)
        }
    }
};

module.exports = {
    getCountries,
    getCountryById,
    getCountryByName
};