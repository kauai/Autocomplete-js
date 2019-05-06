const search = document.querySelector('.search');
const match_list = document.querySelector('#match-list');

const searchState = async searchText => {
   const state = await (await fetch('https://gist.githubusercontent.com/bradtraversy/20dee7787486d10db3bd1f55fae5fdf4/raw/2c06c44dcea55ecbb6fbf20edfd240ec6373b688/state_capitals.json')).json()
   let matches = state.filter( item => {
       const regex = new RegExp(`^${searchText}`,'gi')

       return item.name.match(regex) || item.abbr.match(regex)
   }) 
   !searchText.length && (matches = [])
   outPutHtml(matches)
}


const outPutHtml = matches => {
    if(matches.length > 0){
       const html = matches.map(match => {
          return `<div class="card card-body mb-1">
              <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
              <small>${match.lat} / ${match.long}</small>
              </div>`
       }).join('')
       match_list.innerHTML = html
    }
}

search.addEventListener('input',() => {
    searchState(search.value)
})