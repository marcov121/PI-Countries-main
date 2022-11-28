import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions/index.js';

export default function CountryDetail() {
    const countryDetail = useSelector(e => e.countryDetail);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id]);

    return (
        <div>Vamos...</div>
    )
}