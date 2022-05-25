import React, { useEffect, useState } from 'react';
import { getAllAlbumsMusiques, getOneAlbumMusique, deleteAlbumMusique } from '../requests/list_request.js';

export default function Home() {

    const [albums, setAlbums] = useState([]);
    const [album, setAlbum] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingAlbums, setLoadingAlbums] = useState(true);
    const [loadingAlbum, setLoadingAlbum] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e8f0ff98778b030086179';

    useEffect(() => {
        getOneAlbumMusique(id)
            .then((res) => {
                setAlbum([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingAlbum(false);
            });
    }, [id]);

    useEffect(() => {
        deleteAlbumMusique(id)
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
        getAllAlbumsMusiques()
            .then((res) => {
                setAlbums([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingAlbums(false);
            });
    });


    if (loadingAlbum || loadingAlbums || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllAlbumsMusiques : </h1><br/>
            <div>
                {albums[0].albums.map((alb) => (
                    <div>
                        {alb.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneAlbumMusique (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {album[0].album.name}
            </div>
            <br/>

            <h1>deleteAlbumMusique (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].album.name}
            </div>
            <br/>

        </div>
    );
}
