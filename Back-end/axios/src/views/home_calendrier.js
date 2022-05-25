import React, { useEffect, useState } from 'react';
import { getAllCalendriers, getOneCalendrier, deleteCalendrier } from '../requests/list_request.js';

export default function Home() {

    const [calendriers, setCalendriers] = useState([]);
    const [calendrier, setCalendrier] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingCalendriers, setLoadingCalendriers] = useState(true);
    const [loadingCalendrier, setLoadingCalendrier] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e531fa26d24b0a3fcd655';

    useEffect(() => {
        getOneCalendrier(id)
            .then((res) => {
                setCalendrier([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingCalendrier(false);
            });
    }, [id]);

    useEffect(() => {
        deleteCalendrier(id)
            .then((res) => {
                setSup([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingSupp(false);
            });
    }, [id]);

    useEffect(() => {
        getAllCalendriers()
            .then((res) => {
                setCalendriers([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingCalendriers(false);
            });
    });


    if (loadingCalendrier || loadingCalendriers || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllCalendriers : </h1><br/>
            <div>
                {calendriers[0].calendriers.map((cal) => (
                    <div>
                        {cal.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneCalendrier (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {calendrier[0].calendrier.name}
            </div>
            <br/>

            <h1>deleteCalendrier (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].calendrier.name}
            </div>
            <br/>

        </div>
    );
}
