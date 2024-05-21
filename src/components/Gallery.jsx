import { useContext } from "react";
import PlaceCard from "./PlaceCard";
import { PlaceCardLoader } from "./loaders";
import { MainContext } from "../context/MainContext";

const photos = [
    { src: "/img/imagenes/img01.jpg", width: 800, height: 600 },
    { src: "/img/imagenes/img02.jpg", width: 1600, height: 900 },
  ];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}