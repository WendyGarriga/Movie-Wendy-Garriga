let tituloPrincipal = "Movies"

const h1 = document.getElementById("titulo")

h1.textContent = `${tituloPrincipal}`


const div = document.getElementById("contenedor");

function createCard(movies){
    return` 
    <div class= "flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-2/12 rounded border bg-cyan-950 border-black text-center">
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

printcard(movies, div )

const select = document.getElementById("selge")
const search = document.getElementById("searcher")



input.addEventListener("input", () => {
    const moviesbyname = filtermoviesbyname(
      movies,
      input.value
    );
function moviesbyname(listmovie, name) {
    return listmovie.filter(movie => movie.name.toLowerCase().startsWith(name.toLowerCase()))
    }
    const valuesChecked = verifiqueChecked();
    const moviesbytag = filtermoviesbytag(
      moviesbyname,
      valuesChecked
    );
    printcard(moviesbytag, main);
  });
function filtermoviesbytag(listmovie, selected) {
    if( selected.length == 0 ) {
        return listmovie
    }else{
        return listmovie.filter(movie => selected.some(selected => movie.tags.includes(selected)))
    }
}
    elemento.addEventListener("input", () => {
    const moviesbyname = filtermoviesbyname(
      movies,
      input.value
    );
    const valuesChecked = verifiquedChecked();
    const moviesbytag= filtermoviesbytag(
      moviesbyname,
      valuesChecked
    );
    function createCheckbox(tag) {
        return `<label>${tag}
                    <input type="checkbox" name="tag" value="${tag}">
                </label>`
    }
    const fnReduce = (template, tag) => template + crearCheckbox(tag);

    function getTags( movies ){
        const tags = movies.map((movie) => movie.tags).flat();
        const setTags = new Set(tags);
        return Array.from(setTags);

    function verifiquedChecked() {

        const checkboxes = document.querySelectorAll('[type="checkbox"]')
        const values = []
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                values.push(checkbox.value)
            }
        }
        return values

    printcard(moviesbyname, main);
  });
  