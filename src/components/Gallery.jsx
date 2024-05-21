import { useContext } from "react";
import PlaceCard from "./PlaceCard";
import { PlaceCardLoader } from "./loaders";
import { MainContext } from "../context/MainContext";
import PhotoAlbum from "react-photo-album";
import img01 from "../img/imagenes/img01.jpg";
import img02 from "../img/imagenes/img02.jpg";

const photos = [
    { src: img01, width: 800, height: 600 },
    { src: img02, width: 1600, height: 900 },
  ];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}