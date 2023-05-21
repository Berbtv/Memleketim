const Url = 'https://imdb8.p.rapidapi.com/auto-complete';
const Anahtar = '47f4280020mshba4b719b7a520cbp1ea869jsn6a6269c9500f';

const filmAdInput = document.getElementById('film-ad-input');
const filmContainer = document.getElementById('film-container');
const filmPoster = document.getElementById('film-poster');
const filmAd = document.getElementById('film-ad');
const filmBilgileri = document.getElementById('film-bilgileri');

async function getFilmData() {
  const filmAdi = filmAdInput.value.trim();
  
  if (filmAdi === '') {
    alert('Film adı girin');
    return;
  }
  
  const url = `${Url}?q=${encodeURIComponent(filmAdi)}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': Anahtar,
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.d && data.d.length > 0) {
      const firstResult = data.d[0];
      const filmAdi = firstResult.l;
      const filmResmi = firstResult.i && firstResult.i.imageUrl;
      const filmBilgiListesi = firstResult.s && firstResult.s.split(',');

      filmAd.textContent = filmAdi;
      filmPoster.src = filmResmi;

      filmBilgileri.innerHTML = '';
      filmBilgiListesi.forEach((bilgi) => {
        const liElement = document.createElement('li');
        liElement.textContent = bilgi.trim();
        filmBilgileri.appendChild(liElement);
      });
    } else {
      filmAd.textContent = 'Film bulunamadı';
      filmPoster.src = '';
      filmBilgileri.innerHTML = '';
    }
  } catch (error) {
    console.error(error);
  }
}
