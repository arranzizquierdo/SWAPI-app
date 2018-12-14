'use strict';

const inputEl = document.querySelector('.input-search');
const selectEl = document.querySelector('#select-search');
const buttonEl = document.querySelector('.button');
const listEl = document.querySelector('.list-result');
const phraseEl = document.querySelector('.phrase');
const smallMessage = document.querySelector('.small');


function handleSearch() {
    const selectSearch = selectEl.value;
    const inputSearch = inputEl.value;
    listEl.innerHTML = 'que la suerte te acompañe...';
    fetch(`https://swapi.co/api/${selectSearch}/?search=${inputSearch}`)
        .then (response => response.json())
        .then(data => {
            const listResult = data.results;
            console.log(listResult);

            listEl.innerHTML = "";
            for (let i = 0; i < listResult.length; i++) {
                smallMessage.innerHTML= 'Pincha los enlaces para +info de SWAPI';
                if (selectSearch === 'films') {
                    listEl.innerHTML += `<li class="item"><a href="${listResult[i].url}">${listResult[i].title}</a></li>`;
                } else if (selectSearch === 'people') {
                    listEl.innerHTML += `<li class="item"><a href="${listResult[i].url}">${listResult[i].name}</a></li>`;
                } else {
                    listEl.innerHTML += `<li class="item"><a href="${listResult[i].url}">${listResult[i].name}</a></li>`;
                }
            }
        })
}
buttonEl.addEventListener('click', handleSearch);