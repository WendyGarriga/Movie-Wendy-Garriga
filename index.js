import{createCard, printcard, selopt, filtermoviesbyname, filtermoviesbytag, buttonf} from "./functions.js"

let tituloPrincipal = "Movies"

const h1 = document.getElementById("titulo")

h1.textContent = `${tituloPrincipal}`


const div = document.getElementById("contenedor");
let movies = []
const searcher = document.getElementById("searcher")
const selge =document.getElementById("selge")

const url = "https://moviestack.onrender.com/api/movies"
const init = {
    method:"GET",
    headers:{
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}
fetch (url, init)
    .then(response=>response.json())
    .then(data =>{
        const movies = data;
        console.log(movies); 
        const moviesArray = Object.values(data.movies) ;
        selopt(moviesArray,selge)
        printcard(moviesArray, div, createCard);
        buttonf(favorites)

})
.catch(err=>console.log(err))




let favorites = JSON.parse(localStorage.getItem('favorites')) || []
let contenedor = document.getElementById('contenedor')


selge.addEventListener("selge", () =>{
    const filtermoviesbyn = filtermoviesbyname (movies, searcher.value)
    const filtermoviesbyt = filtermoviesbytag (filtermoviesbyn, selge.value)
    if (selge.value ==="all"){
        printcard (filtermoviesbyn,div,createCard)
    }else{
        printcard(filtermoviesbyt, div,createCard)
    }
    buttonf(favorites)
})

searcher.addEventListener(` input`,()=>{
    const filtermoviesbyn = filtermoviesbyname (movies,searcher.value)
    const filtermoviesbyt = filtermoviesbytag (filtermoviesbyn, selge.value)
    if (selge.value === "all"){
        printcard(filtermoviesbyn, div, createCard)
    }else{
        printcard(filtermoviesbyt, div, createCard)


    }
    buttonf(favorites)
    }
)

contenedor.addEventListener('click' , (e) =>{
    const movievent = e.target
    if(movievent.dataset.favo === "favbutton" ){
        const movid = movievent.dataset.movid
        if(favorites.includes(movid)){
            favorites = favorites.filter (favo => favo !== movid)
            movid.dataset.favo="favbutton"
        }else{
            favorites.push(movid)
            movid.dataset.favo="favbutton"
        }
    }
    localStorage.setItem("favorites",JSON.stringify(favorites))
    buttonf(favorites)
})
