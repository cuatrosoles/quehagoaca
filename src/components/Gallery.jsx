import { useContext } from "react";
import PlaceCard from "./PlaceCard";
import { PlaceCardLoader } from "./loaders";
import { MainContext } from "../context/MainContext";
import PhotoAlbum from "react-photo-album";
import imagenes from "../img/imagenes";


export default function Gallery() {
    return <PhotoAlbum layout="masonry" photos={imagenes} />;
}