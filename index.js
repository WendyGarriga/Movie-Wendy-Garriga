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
    if (listmovie.length == 0 ){
        template = `<h2 class="font-bold text-white text-3xl>Theres no movies like that</h2>`
    }
    elemento.innerHTML = template
} 

printcard(movies, div )
//----------------------------------------------------

const selge = document.getElementById("selge")

const tags = movies.map(movie => movie.genres).flat()

const setTags = new Set (tags)

const arrayTags = Array.from(setTags)

function createCheckbox(tag){
    return `<label>${tag}
                <input type="checkbox" name="tag" value "${tag}">
            </label>`
}
const fnReduce = (template, tag ) => template + createCheckbox (tag)

selge.innerHTML = arrayTags.reduce (fnReduce, "")
//------------------------



const search = document.getElementById("searcher")

input.addEventListener('input', () => {
    // printcard(movies,div)
    const filtermoviesbyname = filtermoviesbyname( movies , input.value)
    printcard(filtermoviesbyname, div)
})

function filtermoviesbyname (listmovie , title){
    return listmovie.filter(movies => movies.title.toLowerCase().startsWith (title.toLowerCase ()))
}

selge.addEventListener('input',() =>{
    const valuesChecked = verifiChecked()
    const filtermoviesbytag = filtermoviesbytag(filtermoviesbyname, valuesChecked)
    printcard(filtermoviesbytag, div)
})

function filtermoviesbyname ( listmovie, title) {
    return listmovie,filter(movies => movies.name.toLowerCase().startsWith(title.toLowerCase()))
}

function filtermoviesbytag(listmovie, selected){
    return listmovie.filter (movies=> selected.some(selected => movies.tags.includes(selected)))
}

function verifiChecked(){
    const checkboxes = document.querySelectorAll('[type="checkbox"]')
    const values = []
    for (const checkbox of checkboxes){
        if (checkbox.checked){
            values.push(checkbox.value)
        }
    }
    return values
}





