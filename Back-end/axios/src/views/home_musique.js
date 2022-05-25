import React, { useEffect, useState } from 'react';
import { getAllMusiques, getOneMusique, deleteMusique } from '../requests/list_request.js';

export default function Home() {

    const [musiques, setMusiques] = useState([]);
    const [musique, setMusique] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingMusiques, setLoadingMusiques] = useState(true);
    const [loadingMusique, setLoadingMusique] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e8f0ff98778b030086179';

    useEffect(() => {
        getOneMusique(id)
            .then((res) => {
                setMusique([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingMusique(false);
            });
    }, [id]);

    useEffect(() => {
        deleteMusique(id)
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
        getAllMusiques()
            .then((res) => {
                setMusiques([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingMusiques(false);
            });
    });


    if (loadingMusique || loadingMusiques || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllMusiques : </h1><br/>
            <div>
                {musiques[0].musiques.map((music) => (
                    <div>
                        {music.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneMusique (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {musique[0].musique.name}
            </div>
            <br/>

            <h1>deleteMusique (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].musique.name}
            </div>
            <br/>

        </div>
    );
}
