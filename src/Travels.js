import React from "react";

import Travel from "./Travel";

const travels = [
    {
        destination: "Monterrey",
        country: "Mexico",
        photo: "https://www.visitmexico.com/sites/default/files/styles/extralarge/public/field/image/2017/02/nuevo-leon_destinos-principales_monterrey_01.jpg?itok=voPCPa19",
        distance: "8,701",
    },    
    {
        destination: "Seoul",
        country: "South Korea",
        photo: "https://img.kpopmap.com/2018/06/jypbuilding1.jpg",
        distance: "8,779",
    },   
    {
        destination: "Uppsala",
        country: "Sweden",
        photo: "https://www.scandichotels.com/imageVault/publishedmedia/q064x5ldasi2ydtkm0l7/nweden-Uppsala-calm-lake-environment.jpg",
        distance: "1,727",
    },   
    {
        destination: "Torino",
        country: "Italy",
        photo: "https://italianculturalcentre.ca/wp-content/uploads/2017/12/erasmus-experience-torino-italy-irina-9e9a77124d6bc097c6baf624b9bb23f2-1024x468.jpg",
        distance: "991",
    },   
    {
        destination: "Rennes",
        country: "France",
        photo: "http://www.brittanytourism.com/var/crtbre/storage/images/media/images/decouvrir/emblematiques/rennes/rennes_place_de_la_mairie/496004-1-fre-FR/rennes_place_de_la_mairie_reference.jpg",
        distance: "570",
    }   
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
        ))};
    </div>
);

export default Travels;