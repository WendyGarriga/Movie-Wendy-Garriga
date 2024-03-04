
export{createCard,printcard,filtermoviesbyname, filtermoviesbytag, selopt, buttonf}


function createCard(movies){
    
    return` 
    <div  class= "flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-2/12 rounded border bg-cyan-950 border-black text-center" id="${movies.id}">
        <img class= "w-full h-1/5" src="https://moviestack.onrender.com/static/${movies.image}" alt="${movies.title}">
        <button data-favo="favButton" data-movid="${movies.id}" type="button">★</button>
        <h3 class="bg-teal-600 w-full ">${movies.title}</h3>
        <h4>${movies.tagline}</h4>
        <p>${movies.overview}</p>
        <a class="hover:bg-cyan-100 hover:text-black"href="./info.html?id=${movies.id}&name=${movies.title}">More info</a>
    </div>
    `;
    
    
}


// function searchKeymovi(listmovie, titleSearch){
//     for (const movi of listmovie){
//         if(movi.title == titleSearch){
//             return movi.key
//         }
//     }
//     return null
// }
function filtermoviesbyname (listmovie , title){
    return listmovie.filter(movies => movies.title.toLowerCase().startsWith (title.toLowerCase ()))
}
function selopt (listmovie, elemento){
    let options=""
    const genrep = listmovie.map((movies) => movies.genres).flat().filter((value,index,pikachu)=>pikachu.indexOf(value) === index)
    genrep.forEach((genres) => {
        options+=`<option value="${genres}">${genres}</option>`
    })
    elemento.innerHTML = `<option value="all">All Generes</option>`
    +options
}


function filtermoviesbytag  (listmovie,genres){
    return listmovie.filter((movies) => movies.genres.includes(genres))
}


function buttonf(favorites) {
    const favbutton =document.querySelectorAll("[data-favo]");
    favbutton.forEach (buton =>{
        const movid = buton.dataset.movid
        if (favorites.includes(movid)){
            buton.dataset.fav = "buttonY"
        }else {
            buton.dataset.fav = "butonfav"
        }
    } )
}


function printcard( listmovie, elemento, fn ){
    let template = ""
    for (const movi of listmovie){
        template += fn (movi)
    }
    if (listmovie.length == 0 ){
        template = "<h2 class=font-bold text-white text-3xl>There's no movies like that</h2>"
    }
    elemento.innerHTML = template;
} 

 


