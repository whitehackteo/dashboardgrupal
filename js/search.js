
//const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&query=Jack+Reacher"
let movieNameRef = document.getElementById("movie-name");
let searshBtn = document.getElementById("searsh-button");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&page=${page}&query=${movieName}`;
  //If input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg"></h3>`;
  }
 
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        
        if (data.Response == "True") {
          result.innerHTML = `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/original/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
              			<h3 class="titulo"> Rate : ${pelicula.vote_average} </h3>
					</div>
				`;
        }
        
        else {
          result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
        }
      })
      
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};
searshBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);