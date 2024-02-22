let tituloPrincipal = "Moviestack"

const h1 = document.getElementById("titulo")

h1.textContent = `${tituloPrincipal}`


const div = document.getElementById("contenedor");

function createCard(movies){
    return` 
    <div class= "flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-2/12 rounded border border-black text-center">
        <img class= "w-full 3xl" src="${movies.image}" alt="${movies.title}">
        <h3>${movies.title}</h3>
        <h4>${movies.tagline}
        <p>${movies.overview}</p>
    </div>
    `;
}

function printcard( listmovie, elemento ){
    let template = ""
    for (const movi of listmovie){
        template += createCard (movi)
    }
    elemento.innerHTML = template
} 

printcard(movi, div )