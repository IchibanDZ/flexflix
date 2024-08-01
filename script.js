let inputval = document.querySelector("#inputval");
let app = document.querySelector(".app");

async function txtsubmit(val) {
  const reponse = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
  const textsubmit = await reponse.json();

  textsubmit.map((resultat) => {
    let container = document.createElement("div");
    app.appendChild(container);
    container.className = "container"; 

    //afficher image
    let pic = document.createElement("img");
    pic.src = resultat.show.image.medium;
    container.appendChild(pic);

    // afficher titre
    let title = document.createElement("h2");
    title.innerText = resultat.show.name;
    container.appendChild(title);
  });
}

inputval.addEventListener("keyup", () => {
  let recherche = document.getElementById("inputval");
  let search = recherche.value;
  txtsubmit(search);
});

//      let resultStr = removeSpaces(textsubmit.value);
//      console.log(resultStr);a tea
// })

// let inputval = document.querySelector('#inputval');

// async function txtsubmit(val) {
//   const response = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
//   const textsubmit = await response.json();
//   console.log(textsubmit);
//    console.log(textsubmit.val)

//   textsubmit.forEach(show => {
//     console.log(show.show.name);
//   });
// }

// let container = document.createElement('div');

// let pic = document.createElement("img");
// pic.src = film.miniature;

// let title = document.createElement("h2");
// title.innerText = film.titre;

// let duree = document.createElement("h3");
// duree.innerText = film.duree;

// let synopsis = document.createElement("h4");
// synopsis.innerText = film.synopsis;

// let realisateur = document.createElement("h5");
// realisateur.innerText = film.realisateur;

// let years = document.createElement("h6");
// years.innerText = film.annee_de_sortie;

// container.appendChild(pic);
// container.appendChild(title);
// container.appendChild(duree);
// container.appendChild(synopsis);
// container.appendChild(realisateur);
// container.appendChild(years);

// app.appendChild(container);
