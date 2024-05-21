import { useContext } from "react";
import PlaceCard from "./PlaceCard";
import { PlaceCardLoader } from "./loaders";
import { MainContext } from "../context/MainContext";
import PhotoAlbum from "react-photo-album";
import img01 from "../img/imagenes/img01.jpg";
import img02 from "../img/imagenes/img02.jpg";
import img03 from "../img/imagenes/img03.jpg";
import img04 from "../img/imagenes/img04.jpg";
import img05 from "../img/imagenes/img05.jpg";
import img06 from "../img/imagenes/img06.jpg";
import img07 from "../img/imagenes/img07.jpg";
import img08 from "../img/imagenes/img08.jpg";
import img09 from "../img/imagenes/img09.jpg";
import img10 from "../img/imagenes/img10.jpg";
import img11 from "../img/imagenes/img11.jpg";
import img12 from "../img/imagenes/img12.jpg";
import img13 from "../img/imagenes/img13.jpg";
import img14 from "../img/imagenes/img14.jpg";

const photos = [
    { src: img01 },
    { src: img02 },
    { src: img03 },
    { src: img04 },
    { src: img05 },
    { src: img06 },
    { src: img07 },
    { src: img08 },
    { src: img09 },
    { src: img10 },
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
  ];

export default function Gallery() {
    return <PhotoAlbum layout="masonry" photos={photos} />;
}