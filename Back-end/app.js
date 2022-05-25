const express = require('express');
const mongoose = require('mongoose'); //Mongoose permet de faire le lien avec la bdd MongoDB.
const body_parser = require('body-parser');
const routeur_musique = require('./router/musique.js');
const routeur_video = require('./router/video.js');
const routeur_image = require('./router/image.js');
const routeur_biographie = require('./router/biographie.js');
const routeur_calendrier = require('./router/calendrier.js');
const routeur_article = require('./router/article.js');
const routeur_playlist_video = require('./router/playlist_video.js');
const routeur_album_musique = require('./router/album_musique.js');
const routeur_partie = require('./router/partie.js');
const routeur_sous_partie = require('./router/sous_partie.js');
const routeur_corpus_sous_partie = require('./router/corpus_sous_partie.js');
const Grid = require('gridfs-stream');

//Application express.
const app = express();

// mongoose.connect('mongodb+srv://DorianVonkrafft:leprojetpweb2022@projetdorianvonkrafft.yvdbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//     console.log("Connection success !");
// }).catch((error) => {
//     console.log("Connection refused, ", error);
// });

const mongoURL = 'mongodb+srv://DorianVonkrafft:leprojetpweb2022@projetdorianvonkrafft.yvdbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const promise = mongoose.connect(mongoURL, {useNewUrlParser: true});
const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
    gfs = Grid(conn, mongoose.mongo);
    gfs.collection('videos');
    console.log("Connection success !");
});

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});

// app.get('/musiques/create', (request, response) => {
//     response.sendFile('./views/create.html', { root: __dirname });
// });

app.use('/musiques/', routeur_musique);
app.use('/videos/', routeur_video);
app.use('/images/', routeur_image);
app.use('/biographies/', routeur_biographie);
app.use('/calendriers/', routeur_calendrier);
app.use('/articles/', routeur_article);
app.use('/playlists_videos/', routeur_playlist_video);
app.use('/albums_musiques/', routeur_album_musique);
app.use('/parties/', routeur_partie);
app.use('/sous_parties/', routeur_sous_partie);
app.use('/corpus_sous_parties/', routeur_corpus_sous_partie);

module.exports = app;
