import React, { useEffect, useState } from 'react';
import { getAllParties, getOnePartie, deletePartie } from '../requests/list_request.js';

export default function Home() {

    const [parties, setParties] = useState([]);
    const [partie, setPartie] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingParties, setLoadingParties] = useState(true);
    const [loadingPartie, setLoadingPartie] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e531fa26d24b0a3fcd655';

    useEffect(() => {
        getOnePartie(id)
            .then((res) => {
                setPartie([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingPartie(false);
            });
    }, [id]);

    useEffect(() => {
        deletePartie(id)
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
        getAllParties()
            .then((res) => {
                setParties([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingParties(false);
            });
    });


    if (loadingPartie || loadingParties || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllParties : </h1><br/>
            <div>
                {parties[0].parties.map((part) => (
                    <div>
                        {part.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOnePartie (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {partie[0].partie.name}
            </div>
            <br/>

            <h1>deletePartie (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].partie.name}
            </div>
            <br/>

        </div>
    );
}
