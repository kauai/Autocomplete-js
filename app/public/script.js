const search = document.querySelector('.search');
const match_list = document.querySelector('#match-list');

const searchState = async searchText => {
   const state = await (await fetch('https://gist.githubusercontent.com/bradtraversy/20dee7787486d10db3bd1f55fae5fdf4/raw/2c06c44dcea55ecbb6fbf20edfd240ec6373b688/state_capitals.json')).json()
   let matches = state.filter( item => {
       const regex = new RegExp(`^${searchText}`,'gi')

       return item.name.match(regex) || item.abbr.match(regex)
   }) 
   console.log(matches)
}

search.addEventListener('input',() => {
    searchState(search.value)
})