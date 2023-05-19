const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1';
const key = '47f4280020mshba4b719b7a520cbp1ea869jsn6a6269c9500f'
const IMG_Path = 'https://image.tmdb.org/t/p/w1280';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getMovie(url){
    const res = await fetch(url);
    const data = await res.json();
    showMovie(data.results);
}

function showMovie(movie){
    main.innerHTML = '';
    movie.array.forEach(movie => {
        const {title, poseter_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `

        <div class="movie">
            <img src=" ${IMG_Path + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
        </div>
            <div class="overview">
                ${overview}
          </div>
      </div>
         `
        main.appendChild(movieEl);

    });

}

function getClassByRate(vote)

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const searcTerm = search.value;

    if(searcTerm && searcTerm !== ''){
        getMovie(url + searcTerm)
        search.value='';
    }
    else{
        window.location.reload()
    }    
})