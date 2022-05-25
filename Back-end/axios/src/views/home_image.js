import React, { useEffect, useState } from 'react';
import { getAllImages, getOneImage, deleteImage, postImage, putImage } from '../requests/list_request.js';

export default function Home() {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState([]);

    const [loadingImages, setLoadingImages] = useState(true);
    const [loadingImage, setLoadingImage] = useState(true);

    const [file_image, setFile] = useState(null);
    const [name_image, setName] = useState('');
    const [desc_image, setDesc] = useState('');

    const [sup, setSup] = useState('');

    const [file_modif, setFileModif] = useState(null);
    const [name_modif, setNameModif] = useState('');
    const [desc_modif, setDescModif] = useState('');
    const [id_modif, setIdModif] = useState('');

    const [error, setError] = useState(false);

    //var file_image = React.createRef();

    const id = '6283fd1a9eb80839d7615987';

    //GET ONE
    useEffect(() => {
        getOneImage(id)
            .then(response => {
                setImage([response.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingImage(false);
            });
    }, [id]);


    //GET ALL
    useEffect(() => {
        getAllImages()
            .then(response => {
                setImages([response.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingImages(false);
            });
    });

    if (loadingImage || loadingImages) return 'Loading...';
    if (error) return 'Error, there is a problem';

    //POST
    const handleAjout = (event) => {
        event.preventDefault();
        var uploader = new FormData();
        var today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        today = yyyy + '-' + mm + '-' + dd;

        uploader.append('date', today);
        uploader.append('name', name_image);
        uploader.append('description', desc_image);
        uploader.append('file', file_image);

        console.log(uploader.get('name'), uploader.get('description'), uploader.get('date'), uploader.get('file'));

        postImage(uploader)
        .then(res => {
            console.log("data envoyée", res);
        });
    }

    //DELETE
    const handleSupp = (event) => {
        event.preventDefault();

        deleteImage(sup)
        .then(res => {
            console.log("data supprimée", res);
        });
    }

    //PUT
    const handleModif = (event) => {
        event.preventDefault();
        var uploader = new FormData();
        var today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        today = yyyy + '-' + mm + '-' + dd;

        uploader.append('date', today);
        uploader.append('name', name_modif);
        uploader.append('description', desc_modif);
        uploader.append('file', file_modif);

        console.log(uploader.get('name'), uploader.get('description'), uploader.get('date'), uploader.get('file'));
        console.log(id_modif);

        putImage(id_modif, uploader)
        .then(res => {
            console.log("data modifiée", res);
        });
    }

    return (
        <div>

            <h1>getAllImages : </h1><br/>
                <div>
                    {images[0].images.map((im) => (
                        <div>
                            {im.name}
                        </div>
                    ))}
                </div>
            <br/>

            <h1>getOneImage (id = {id}) : </h1> <br/>
                <div>
                    {image[0].image.name}
                </div>
            <br/>

            <h1> Ajout d'une image : </h1>
                <div>
                    <form onSubmit={handleAjout}>
                        <label>Le nom de l'image : </label>
                        <input type="text" value={name_image} onChange={val => setName(val.target.value)}/><br/><br/>

                        <label>La description de l'image : </label>
                        <input type="text" value={desc_image} onChange={val => setDesc(val.target.value)}/><br/><br/>

                        <label>Le fichier de l'image :</label>
                        <input type="file" ref={file_image} multiple={false} onChange={val => setFile(val.target.files[0])}/><br/><br/>

                        <input type="submit" value="Upload "/><br/><br/>
                    </form>
                </div>

            <h1>Suppression d'une image : </h1>
                <div>
                    <form onSubmit={handleSupp}>
                        <label>Le nom de l'image à supprimer : </label>
                        <input type="text" value={sup} onChange={val => setSup(val.target.value)}/><br/><br/>

                        <input type="submit" value="Supprimer "/>
                    </form>
                </div>

                <h1> Modif d'une image : </h1>
                    <div>
                        <form onSubmit={handleModif}>

                            <label>L'ID de l'image à modifier : </label>
                            <input type="text" value={id_modif} onChange={val => setIdModif(val.target.value)}/><br/><br/>

                            <label>Le nom de l'image à modifier : </label>
                            <input type="text" value={name_modif} onChange={val => setNameModif(val.target.value)}/><br/><br/>

                            <label>La description de l'image à modifier : </label>
                            <input type="text" value={desc_modif} onChange={val => setDescModif(val.target.value)}/><br/><br/>

                            <label>Le fichier de l'image à modifier :</label>
                            <input type="file" ref={file_modif} multiple={false} onChange={val => setFileModif(val.target.files[0])}/><br/><br/>

                            <input type="submit" value="Upload "/><br/><br/>
                        </form>
                    </div>
        </div>
    );
}
