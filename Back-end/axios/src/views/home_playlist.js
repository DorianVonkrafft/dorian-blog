import React, { useEffect, useState } from 'react';
import { getAllPlaylistsVideos, getOnePlaylistVideo, deletePlaylistVideo } from '../requests/list_request.js';

export default function Home() {

    const [p_videos, setPVideos] = useState([]);
    const [p_video, setPVideo] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingPVideos, setLoadingPVideos] = useState(true);
    const [loadingPVideo, setLoadingPVideo] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e8f0ff98778b030086179';

    useEffect(() => {
        getOnePlaylistVideo(id)
            .then((res) => {
                setPVideo([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingPVideo(false);
            });
    }, [id]);

    useEffect(() => {
        deletePlaylistVideo(id)
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
        getAllPlaylistsVideos()
            .then((res) => {
                setPVideos([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingPVideos(false);
            });
    });


    if (loadingPVideo || loadingPVideos || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllPlaylistsVideos : </h1><br/>
            <div>
                {p_videos[0].videos.map(p_vid) => (
                    <div>
                        {p_vid.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOnePlaylistVideo (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {p_video[0].video.name}
            </div>
            <br/>

            <h1>deletePlaylistVideo (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].video.name}
            </div>
            <br/>

        </div>
    );
}
