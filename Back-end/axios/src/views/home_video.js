import React, { useEffect, useState } from 'react';
import { getAllVideos, getOneVideo, deleteVideo } from '../requests/list_request.js';

export default function Home() {

    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingVideos, setLoadingVideos] = useState(true);
    const [loadingVideo, setLoadingVideo] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e8f0ff98778b030086179';

    useEffect(() => {
        getOneVideo(id)
            .then((res) => {
                setVideo([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingVideo(false);
            });
    }, [id]);

    useEffect(() => {
        deleteVideo(id)
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
        getAllVideos()
            .then((res) => {
                setVideos([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingVideos(false);
            });
    });


    if (loadingVideo || loadingVideos || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllVideos : </h1><br/>
            <div>
                {videos[0].videos.map((vid) => (
                    <div>
                        {vid.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneVideo (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {video[0].video.name}
            </div>
            <br/>

            <h1>deleteVideo (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].video.name}
            </div>
            <br/>

        </div>
    );
}
