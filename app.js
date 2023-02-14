//Opción de un único hotel//
//var hotel = {
//    name: "La Era de Aracena",
//    location: "Huelva",
//   img: 
//    "https://era-de-aracena.hotelmix.es/data/Photos/r1833x621/13147/1314727/1314727585/Hotel-La-Era-De-Aracena-Adults-Only-Exterior.JPEG",
//};

//Opción de varios hoteles//
var hotels = {
    LaEradeAracena: {
        name: "La Era de Aracena",
        location: "Huelva",
        img: "https://era-de-aracena.hotelmix.es/data/Photos/r1833x621/13147/1314727/1314727585/Hotel-La-Era-De-Aracena-Adults-Only-Exterior.JPEG",
    },
    UrbanDreamGranada: {
        name: "Urban Dream Granada",
        location: "Granada",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/39329144.jpg?k=17268893b26f29d3b08afff32f6f62b9b1d980e09e39a64d24509941559e70b3&o=&hp=1",
    },
};
var selectedhotel = prompt("Indique el hotel al que quiere hacer la reseña:LaEradeAracena o UrbanDreamGranada");

document.getElementById("name-hotel").innerHTML = "Hotel " + hotels[selectedhotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotels[selectedhotel].location;
document.getElementById("img-hotel").src = hotels[selectedhotel].img;

//puntuación//
//var rating = prompt("Puntuación: del 1 al 5");
//document.getElementById("rating").innerHTML = rating + "estrellas";

var stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};
//rating//
var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas?");
document.getElementById("rating").innerHTML = stars[rating];
//sí o no//
var anonymous = confirm("¿Quiére que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;