import React, { useEffect, useState } from 'react';
import { getAllSousParties, getOneSousPartie, deleteSousPartie } from '../requests/list_request.js';

export default function Home() {

    const [sousParties, setSousParties] = useState([]);
    const [sousPartie, setSousPartie] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingSousParties, setLoadingSousParties] = useState(true);
    const [loadingSousPartie, setLoadingsousPartie] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e531fa26d24b0a3fcd655';

    useEffect(() => {
        getOneSousPartie(id)
            .then((res) => {
                setSousPartie([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingSousPartie(false);
            });
    }, [id]);

    useEffect(() => {
        deleteSousPartie(id)
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
        getAllSousParties()
            .then((res) => {
                setSousParties([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingSousParties(false);
            });
    });


    if (loadingSousPartie || loadingSousParties || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllSousParties : </h1><br/>
            <div>
                {sousParties[0].sousParties.map((sous) => (
                    <div>
                        {sous.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneSousPartie (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sousPartie[0].sousPartie.name}
            </div>
            <br/>

            <h1>deleteSousPartie (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].sousPartie.name}
            </div>
            <br/>

        </div>
    );
}
