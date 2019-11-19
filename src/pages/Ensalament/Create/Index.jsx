import React, { useEffect } from 'react';
import api from '../../../utils/API';

export default function MainBuildings(props) {

    useEffect(() => {
        async function getBuildings() {
            const response = await api.get(`/Ensalament`);

            console.warn("response.data", response.data.data)
        }
        getBuildings();
    }, []);

    return (
        <h1>TESTE</h1>
    )
}