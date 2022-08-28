import { queryURL, params } from './config/config.js'
import { shortcutBtnsBlock } from './modules/shortcutButtons.js'
import { fetchingGifsFromAPI } from './common/fetchinGifApi.js'

const gifItemsConainer = document.getElementById('gifs_container')
const submitBtn = document.getElementById('submitBtn')
const trendingBtn = document.getElementById('trendingBtn')
const shortcutContainer = document.getElementById('shortcut-btns')
const shortcutBtns = document.querySelectorAll('div.shortcut-btns')

// shortcut btns
const shortcutBtnsData = [
  'Internet cats',
  "Meme's",
  'Typing',
  'Space',
  'Rick and Morty',
]
const mainShortcutBtnsBlock = new shortcutBtnsBlock(
  shortcutContainer,
  shortcutBtnsData,
)
mainShortcutBtnsBlock.render()

const activatingShortcutBtns = () => {
  for (let shortcutBtn of shortcutBtns[0].children) {
    shortcutBtn.addEventListener('click', () => {
      fetchingGifsFromAPI(
        idOfGifItemsContainer,
        `${queryURL}search?q=${shortcutBtn.textContent}&limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`,
      )
    })
  }
}
activatingShortcutBtns()

// Submit btn
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const searchedValue = document.getElementById('searchedValue')
  let existsBtn = false
  if (searchedValue.value !== '') {
    // Adding only new values to array
    for (let shortcutBtnValue of shortcutBtnsData) {
      if (shortcutBtnValue === searchedValue.value) {
        existsBtn = true
      }
    }
    if (existsBtn === false) {
      shortcutBtnsData.push(searchedValue.value)
    }
    //  Gifs Fetching
    fetchingGifsFromAPI(
      gifItemsConainer,
      `${queryURL}search?q=${searchedValue.value}&limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`,
    )
    // Deleting first value of shortcutBtnsData array
    if (shortcutBtnsData.length > 6) {
      shortcutBtnsData.shift()
    }
    activatingShortcutBtns()
    mainShortcutBtnsBlock.render()
    //delete input value
    searchedValue.value = ''
  }
})
// Trending button
trendingBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // Fetching Gifs
  fetchingGifsFromAPI(
    gifItemsConainer,
    `${queryURL}trending?limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`,
  )
})
