    const cargarAnimes = ()  {

        const valueInput = document.getElementById("Anime");
      
        let Anime = []
      
        fetch("../json/Anime.json")
        .then((res)=> res.json())
        .then((data)=>{
            animes = data.animes
            mostrarAnime(animes)   
        })
        .catch((error)=>{
          console.log(error)
        }) 
      
        const encontrarAnimes = (e)  {
      
                  const valorInput = e.target.value.toLowerCase()
      
                  const arrayAnime = animes.filter(anime => {
      
                    return animes.nombre.toLowerCase().indexOf(valorInput) != -1
      
                  })
                    mostrarAnime(arrayAnimes)
             }
      
                valueInput.addEventListener("keyup", encontrarAnimes)    
      }
      
      document.addEventListener("DOMContentLoaded", cargarAnimes)

      const mostrarAnimes = (anime)  {
      
        const mostrar = document.getElementById("mostrar");
      
        let html = "";

        if(animes.length > 0){
          animes.forEach((dato) {
                html += `           
                  <div class="card m-5 p-3" style="width: 10rem;">
                      <img src="${dato.img}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">${dato.nombre}</h5>
                              <p class="card-text">${dato.descripcion}</p>
                          </div>
                  </div>
                    `
              })
        }else{
            html += `<h2>Error404!!</h2>`
        }
        mostrar.innerHTML = html
     }