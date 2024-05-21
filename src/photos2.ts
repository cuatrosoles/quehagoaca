
const img01 = require('img/imagenes/img01.jpg');
const img02 = require('img/imagenes/img02.jpg');
const img03 = require('img/imagenes/img03.jpg');
const img04 = require('img/imagenes/img04.jpg');
const img05 = require('img/imagenes/img05.jpg');
const img06 = require('img/imagenes/img06.jpg');
const img07 = require('img/imagenes/img07.jpg');
const img08 = require('img/imagenes/img08.jpg');
const img09 = require('img/imagenes/img09.jpg');
const img10 = require('img/imagenes/img10.jpg');
const img11 = require('img/imagenes/img11.jpg');
const img12 = require('img/imagenes/img12.jpg');
const img13 = require('img/imagenes/img13.jpg');
const img14 = require('img/imagenes/img14.jpg');


const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];


const unsplashPhotos = [
    { id: img01, width: 1080, height: 800 },
    { id: img02, width: 1080, height: 1620 },
    { id: img03, width: 1080, height: 720 },
    { id: img04, width: 1080, height: 721 },
    { id: img05, width: 1080, height: 1620 },
    { id: img06, width: 1080, height: 607 },
    { id: img07, width: 1080, height: 608 },
    { id: img08, width: 1080, height: 720 },
    { id: img09, width: 1080, height: 1549 },
    { id: img10, width: 1080, height: 720 },
    { id: img11, width: 1080, height: 694 },
    { id: img12, width: 1080, height: 1620 },
    { id: img13, width: 1080, height: 720 },
    { id: img14, width: 1080, height: 1440 },
];

const photos = unsplashPhotos.map((photo) => ({
    src: photo.id,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photo.id, breakpoint, height,
            width: breakpoint
        };
    }),
}));

export default photos;
