let asid = document.querySelector("main section aside div");
asid.addEventListener("mouseover", entree);
asid.addEventListener("mouseout", sorti);

function entree() {
    asid.style.borderRadius = "0%"
}
function sorti() {
    asid.style.borderRadius = "50%"
}
let d1 = document.querySelectorAll("main section section article div")
let tet = document.querySelectorAll(" main section section article header");
tet[0].addEventListener("click", () => {
    if (d1[0].style.visibility === "hidden") {
        d1[0].style.visibility = "visible";
        d1[0].style.height = "auto";
    } else {
        d1[0].style.visibility = "hidden";
        d1[0].style.height = "0px";
    }
}
)



//   
tet[1].addEventListener("click", () => {
    if (d1[1].style.visibility === "hidden") {
        d1[1].style.visibility = "visible";
        d1[1].style.height = "auto";
    } else {
        d1[1].style.visibility = "hidden";
        d1[1].style.height = "0px";
    }
}
)
tet[2].addEventListener("click", () => {
    if (d1[2].style.visibility === "hidden") {
        d1[2].style.visibility = "visible";
        d1[2].style.height = "auto";
    } else {
        d1[2].style.visibility = "hidden";
        d1[2].style.height = "0px";
    }
}
)


//  ***********************************json *******************************
let xhl = new XMLHttpRequest();
xhl.open('GET', './data/menu.json');
xhl.responseType = 'json';

    xhl.addEventListener('load', function () {
        let menua = this; this.response;
        let place = document.querySelector("main header nav");
        place.innerHTML = " ";
        menua.forEach(element => {
            let list = new colone(element.nom, element.lien)
            list.afficher();
        });
    })






class colone {
    constructor(nom) {
        this.nom = nom;

    }
    afficher() {
      
        let leNom = document.createElement('a');
        leNom.innerHTML = this.nom;
        men.appendChild(leNom);
    }


}