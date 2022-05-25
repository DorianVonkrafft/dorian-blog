import React, { useEffect, useState } from 'react';
import { getAllBiographies, getOneBiographie, deleteBiographie } from '../requests/list_request.js';

export default function Home() {

    const [bios, setBios] = useState([]);
    const [bio, setBio] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingBios, setLoadingBios] = useState(true);
    const [loadingBio, setLoadingBio] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e531fa26d24b0a3fcd655';

    useEffect(() => {
        getOneBiographie(id)
            .then((res) => {
                setBio([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingBio(false);
            });
    }, [id]);

    useEffect(() => {
        deleteBiographie(id)
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
        getAllBiographies()
            .then((res) => {
                setBios([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingBios(false);
            });
    });


    if (loadingBio || loadingBios || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllBiographies : </h1><br/>
            <div>
                {bios[0].bios.map((bio) => (
                    <div>
                        {bio.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneBiographie (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {bio[0].bio.name}
            </div>
            <br/>

            <h1>deleteBiographie (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].bio.name}
            </div>
            <br/>

        </div>
    );
}
