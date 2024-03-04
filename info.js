
let tituloPrincipal = "Lore"

const h1 = document.getElementById("titulo")

// h1.textContent = `${tituloPrincipal}`

const div = document.getElementById("contenedor");

let movies = []
const urlParams = new URLSearchParams (location.search)
const id = urlParams.get(' id')
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
        const movie = moviesArray.find (movies =>movies.id == id)
        document.querySelector('main').appendChild(div)
        div.innerHTML=`
            <article class="flex flex-wrap">
                <img class=" mb-14" src="https://moviestack.onrender.com/static/${movies.image}" alt="Image ${movies.title}">
                <div class="w-1/2 ml-14">
                <h1 class=" text-2xl pb-5">${movies.title}</h1>
                <h2 class="underline text-2xl  pb-5">${movies.tagline}</h2>
                <h3 class="text-white pb-5">${movies.genres}</h3>
                <p class="text-sm text-white md:text-xl">${movies.overview}</p>
                </div>
            </article>
    
            <div class="flex gap-14">
            <table class="border border-solid text-white w-70 h-46">
            <tbody>
                <tr>
                    <td class="p-1 border border-solid text-white">Original Language</td>
                    <td class="p-1 border border-solid text-white">${movies.original_language}</td>
                </tr>
                <tr>
                    <td class="p-1 border border-solid text-white">Release Date</td>
                    <td class="p-1 border border-solid text-white">${movies.release_date}</td>
                </tr>
                <tr>
                    <td class="p-1 border border-solid text-white">Runtime</td>
                    <td class="p-1 border border-solid text-white">${movies.runtime}</td>
                </tr>
                <tr>
                    <td class="p-1 border border-solid text-white">Status</td>
                    <td class="p-1 border border-solid text-white">${movies.status}</td>
                </tr>
            </tbody>
        </table>
        <table class="border border-solid text-white w-70 h-46 ">
            <tbody>
                <tr>
                    <td class="p-1 border border-solid text-white">Vote Average</td>
                    <td class="p-1 border border-solid text-white">${movies.vote_average}</td>
                </tr>
                <tr>
                    <td class="p-1 border border-solid text-white">Budget</td>
                    <td class="p-1 border border-solid text-white">${movies.budget}</td>
                </tr>
                <tr>
                    <td class="p-1 border border-solid text-white">Revenue</td>
                    <td class="p-1 border border-solid text-white">${movies.revenue}</td>
                </tr>
            </tbody>
        </table>
        </div>
        `
})

.catch(err=>console.log(err))
        