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

function searchKeymovi(listmovie, titleSearch){
    for (const movi of listmovie){
        if(movi.title == titleSearch){
            return movi.key
        }
    }
    return null
}

const aux =searchKeymovi(movies , " Openhaimer ")
console.log(document.querySelector(`#${aux}`))

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



const selge = document.getElementById("selge")

const genres = movies.map(movie => movie.genres).flat()

const setGenres = new Set (genres)

const arrayGenres = Array.from(setGenres)

function createCheckbox(genres){
   return `<label>${genres}
                <input type="checkbox" name="genre" value "${genres}">
            </label>`
}
const fnReduce = (template, genre ) => template + createCheckbox (genre)

selge.innerHTML = arrayGenres.reduce (fnReduce, "")





const input = document.getElementById("searcher")

input.addEventListener('input', () => {
   // printcard(movies,div)
    console.log('input Busqueda:', input.value)
    const filtermoviesbyname = filtermoviesbyname( movies , input.value)
    printcard(filtermoviesbyname, div)
})

function filtermoviesbyname (listmovie , title){
    return listmovie.filter(movies => movies.title.toLowerCase().startsWith (title.toLowerCase ()))
}

 // console.log(filtermoviesbyname(movies))

selge.addEventListener('input',() =>{
    const valuesChecked = verifiChecked()
    const filtermoviesbytag = filtermoviesbytag(filtermoviesbyname, valuesChecked)
    printcard(filtermoviesbytag, div)
})

function filtermoviesbytag(listmovie, selected){
    return listmovie.filter (movies=> selected.some(selected => movies.tags.includes(selected)))
}

function filtermoviesbyname ( listmovie, title) {
    return listmovie,filter(movies => movies.name.toLowerCase().startsWith(title.toLowerCase()))
}
console.log(filtermoviesbyname(movies, "open"))

console.log(filtermoviesbyname(movies))

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





