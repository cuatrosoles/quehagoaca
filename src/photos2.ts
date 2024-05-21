import img01 from "./img/imagenes/img01.jpg";
import img02 from "./img/imagenes/img02.jpg";
import img03 from "./img/imagenes/img03.jpg";
import img04 from "./img/imagenes/img04.jpg";
import img05 from "./img/imagenes/img05.jpg";
import img06 from "./img/imagenes/img06.jpg";
import img07 from "./img/imagenes/img07.jpg";
import img08 from "./img/imagenes/img08.jpg";
import img09 from "./img/imagenes/img09.jpg";
import img10 from "./img/imagenes/img10.jpg";
import img11 from "./img/imagenes/img11.jpg";
import img12 from "./img/imagenes/img12.jpg";
import img13 from "./img/imagenes/img13.jpg";
import img14 from "./img/imagenes/img14.jpg";
import img15 from "./img/imagenes/img05.jpg";
import img16 from "./img/imagenes/img06.jpg";


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
    { id: img15, width: 1080, height: 607 },
    { id: img16, width: 1080, height: 608 },
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
