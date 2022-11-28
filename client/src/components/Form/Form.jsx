import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, addActivity } from '../../redux/actions/index.js';
import { Link } from 'react-router-dom';

export default function Form() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.allCountries)

    const [ state, setState ] = useState({
        name: '',
        dificulty: '',
        duration: '',
        season: '',
        cId: []
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(addActivity(state))
    }
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
}