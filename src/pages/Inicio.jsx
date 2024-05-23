import { useState } from "react";
import { Navbar, Galeria, WhereTo, ToVisit, ToEat, ToStay, Footer } from '../components';
import travelerChoiceBg from "../img/tc_cards_desktop.jpeg";
import travelerChoiceBgSM from "../img/tc_cards_tablet.jpeg";
import botb from "../img/botb_mark.svg";

const Inicio = () => {
    // Home Page Trending in Travel toggle state
    const [toggle, setToggle] = useState({
    })

    return (
        <>
            {/* Navbar with Sticky poperty */}
            <Navbar sticky />
            {/* --- */}

            {/* Galeria */}
            <Galeria />
            {/* --- */}

            {/* Footer */}
            <Footer />
            {/* --- */}

        </>
     );
}

export default Inicio;