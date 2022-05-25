import React, { useEffect, useState } from 'react';
import { getAllArticles, getOneArticle, deleteArticle } from '../requests/list_request.js';

export default function Home() {

    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState([]);
    const [sup, setSup] = useState([]);

    const [loadingArticles, setLoadingArticles] = useState(true);
    const [loadingArticle, setLoadingArticle] = useState(true);
    const [loadingSupp, setLoadingSupp] = useState(true);

    const [error, setError] = useState(false);

    const id = '627e531fa26d24b0a3fcd655';

    useEffect(() => {
        getOneArticle(id)
            .then((res) => {
                setArticle([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingArticle(false);
            });
    }, [id]);

    useEffect(() => {
        deleteArticle(id)
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
        getAllArticles()
            .then((res) => {
                setArticles([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingArticles(false);
            });
    });


    if (loadingArticle || loadingArticles || loadingSupp) return 'Loading...';
    if (error) return 'Error, there is a problem';

    return (
        <div>

            <h1>getAllArticles : </h1><br/>
            <div>
                {articles[0].articles.map((art) => (
                    <div>
                        {art.name}
                    </div>
                ))}
            </div>
            <br/>

            <h1>getOneArticle (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {article[0].article.name}
            </div>
            <br/>

            <h1>deleteArticle (id = "627e531fa26d24b0a3fcd655") : </h1> <br/>
            <div>
                {sup[0].article.name}
            </div>
            <br/>
        </div>
    );
}
