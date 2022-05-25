import axios from 'axios';


const publicRequest = axios.create({
    baseURL: 'http://localhost:8080',
});


//******************************IMAGE******************************//
//GET ALL IMAGES OK
export const getAllImages = () => {
    return publicRequest.get('/images')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE IMAGE OK
export const getOneImage = (id) => {
    return publicRequest.get(`/images/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE IMAGE OK
export const deleteImage = (id) => {
    return publicRequest.delete(`/images/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST IMAGE OK
export const postImage = (image) => {
    return publicRequest.post('/images', image)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT IMAGE OK
export const putImage = (id, image) => {
    return publicRequest.put(`/images/${id}`, image)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************MUSIQUE******************************//
//GET ALL MUSIQUES OK
export const getAllMusiques = () => {
    return publicRequest.get('/musiques')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE MUSIQUE OK
export const getOneMusique = (id) => {
    return publicRequest.get(`/musiques/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE MUSIQUE OK
export const deleteMusique = (id) => {
    return publicRequest.delete(`/musiques/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST MUSIQUE OK
export const postMusique = (musique) => {
    return publicRequest.post('/musiques', musique)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT MUSIQUE OK
export const putMusique = (id, musique) => {
    return publicRequest.put(`/musiques/${id}`, musique)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************VIDEO******************************//
//GET ALL VIDEO OK
export const getAllVideos = () => {
    return publicRequest.get('/videos')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE VIDEO OK
export const getOneVideo = (id) => {
    return publicRequest.get(`/videos/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE VIDEO OK
export const deleteVideo = (id) => {
    return publicRequest.delete(`/videos/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST VIDEO OK
export const postVideo = (video) => {
    return publicRequest.post('/videos', video)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT VIDEO OK
export const putVideo = (id, video) => {
    return publicRequest.put(`/videos/${id}`, video)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************PLAYLIST_VIDEO******************************//
//GET ALL PLAYLISTS OK
export const getAllPlaylistsVideos = () => {
    return publicRequest.get('/playlists_videos')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE PLAYLIST OK
export const getOnePlaylistVideo = (id) => {
    return publicRequest.get(`/playlists_videos/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE PLAYLIST OK
export const deletePlaylistVideo = (id) => {
    return publicRequest.delete(`/playlists_videos/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST PLAYLIST OK
export const postPlaylistVideo = (playlist) => {
    return publicRequest.post('/playlists_videos', playlist)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT PLAYLIST OK
export const putPlaylistVideo = (id, playlist) => {
    return publicRequest.put(`/playlists_videos/${id}`, playlist)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************ALBUM_MUSIQUE******************************//
//GET ALL ALBUMS OK
export const getAllAlbumsMusiques = () => {
    return publicRequest.get('/albums_musiques')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE ALBUM OK
export const getOneAlbumMusique = (id) => {
    return publicRequest.get(`/albums_musiques/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE ALBUM OK
export const deleteAlbumMusique = (id) => {
    return publicRequest.delete(`/albums_musiques/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST ALBUM OK
export const postAlbumMusique = (album) => {
    return publicRequest.post('/albums_musiques', album)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT PLAYLIST OK
export const putAlbumMusique = (id, album) => {
    return publicRequest.put(`/albums_musiques/${id}`, album)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************ARTICLE******************************//
//GET ALL ARTICLES OK
export const getAllArticles = () => {
    return publicRequest.get('/articles')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE ARTICLE OK
export const getOneArticle = (id) => {
    return publicRequest.get(`/articles/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE ARTICLE OK
export const deleteArticle = (id) => {
    return publicRequest.delete(`/articles/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST ARTICLE OK
export const postArticle = (article) => {
    return publicRequest.post('/articles', article)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT ARTICLE OK
export const putArticle = (id, article) => {
    return publicRequest.put(`/articles/${id}`, article)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************BIOGRAPHIE******************************//
//GET ALL BIOS OK
export const getAllBiographies = () => {
    return publicRequest.get('/biographies')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE BIO OK
export const getOneBiographie = (id) => {
    return publicRequest.get(`/biographies/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE BIO OK
export const deleteBiographie = (id) => {
    return publicRequest.delete(`/biographies/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST BIO OK
export const postBiographie = (bio) => {
    return publicRequest.post('/biographies', bio)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT BIO OK
export const putBiographie = (id, bio) => {
    return publicRequest.put(`/biographies/${id}`, bio)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************CORPUS******************************//
//GET ALL CORPUS OK
export const getAllCorpus = () => {
    return publicRequest.get('/corpus_sous_parties')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE CORPUS OK
export const getOneCorpus = (id) => {
    return publicRequest.get(`/corpus_sous_parties/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE CORPUS OK
export const deleteCorpus = (id) => {
    return publicRequest.delete(`/corpus_sous_parties/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST CORPUS OK
export const postCorpus = (corpus) => {
    return publicRequest.post('/corpus_sous_parties', corpus)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT CORPUS OK
export const putCorpus = (id, corpus) => {
    return publicRequest.put(`/corpus_sous_parties/${id}`, corpus)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************SOUS_PARTIE******************************//
//GET ALL SOUS_PARTIES OK
export const getAllSousParties = () => {
    return publicRequest.get('/sous_parties')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE SOUS_PARTIE OK
export const getOneSousPartie = (id) => {
    return publicRequest.get(`/sous_parties/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE SOUS_PARTIE OK
export const deleteSousPartie = (id) => {
    return publicRequest.delete(`/sous_parties/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST SOUS_PARTIE OK
export const postSousPartie = (sous) => {
    return publicRequest.post('/sous_parties', sous)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT SOUS_PARTIE OK
export const putSousPartie = (id, sous) => {
    return publicRequest.put(`/sous_parties/${id}`, sous)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************PARTIE******************************//
//GET ALL PARTIES OK
export const getAllParties = () => {
    return publicRequest.get('/parties')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE PARTIE OK
export const getOnePartie = (id) => {
    return publicRequest.get(`/parties/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE PARTIE OK
export const deletePartie = (id) => {
    return publicRequest.delete(`/parties/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST PARTIE OK
export const postPartie = (partie) => {
    return publicRequest.post('/parties', partie)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT PARTIE OK
export const putPartie = (id, partie) => {
    return publicRequest.put(`/parties/${id}`, partie)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};



//******************************CALENDRIER******************************//
//GET ALL CALENDRIERS OK
export const getAllCalendriers = () => {
    return publicRequest.get('/calendriers')
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//GET ONE CALENDRIER OK
export const getOneCalendrier = (id) => {
    return publicRequest.get(`/calendriers/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//DELETE CALENDRIER OK
export const deleteCalendrier = (id) => {
    return publicRequest.delete(`/calendriers/${id}`)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//POST CALENDRIER OK
export const postCalendrier = (calendrier) => {
    return publicRequest.post('/calendriers', calendrier)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};


//PUT CALENDRIER OK
export const putCalendrier = (id, calendrier) => {
    return publicRequest.put(`/calendriers/${id}`, calendrier)
    .then(response => {
        return { data: response.data };
    })
    .catch(error => {
        console.log(error);
    });
};
