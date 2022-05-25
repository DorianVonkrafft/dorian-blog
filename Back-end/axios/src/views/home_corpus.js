import React, { useEffect, useState } from 'react';
import { getAllCorpus, getOneCorpus, deleteCorpus } from '../requests/list_request.js';

export default function Home() {

    const [corpuss, setCorpuss] = useState([]);
    const [corpus, setCorpus] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingCorpuss, setLoadingCorpuss] = useState(true);
    const [loadingCorpus, setLoadingCorpus] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e531fa26d24b0a3fcd655';

    useEffect(() => {
        getOneCorpus(id)
            .then((res) => {
                setCorpus([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingCorpus(false);
            });
    }, [id]);

    useEffect(() => {
        deleteCorpus(id)
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
        getAllCorpus()
            .then((res) => {
                setCorpuss([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingCorpuss(false);
            });
    });


    if (loadingCorpus || loadingCorpuss || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllCorpus : </h1><br/>
            <div>
                {corpuss[0].corpus.map((corp) => (
                    <div>
                        {corp.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneCorpus (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {corpus[0].corpus.name}
            </div>
            <br/>

            <h1>deleteCorpus (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].corpus.name}
            </div>
            <br/>

        </div>
    );
}
