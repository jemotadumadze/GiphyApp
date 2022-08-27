import { queryURL, params } from './config/config.js'
import { shortcutBtnsBlock } from './modules/shortcutButtons.js'
import { fetchingGifsFromAPI } from './common/fetchinGifApi.js'

const gifItemsConainer = document.getElementById('gifs_container')
const submitBtn = document.getElementById('submitBtn')
const trendingBtn = document.getElementById("trendingBtn");
const shortcutContainer = document.getElementById('shortcut-btns')

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

// Submit btn
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const searchedValue = document.getElementById('searchedValue')
  let existsBtn = false
  if (searchedValue.value !== '') {
    // Adding only new values to shortcutBtnsData array
    for (let shortcutBtnValue of shortcutBtnsData) {
      if (shortcutBtnValue === searchedValue.value) {
        existsBtn = true
      }
    }
    if (existsBtn === false) {
      shortcutBtnsData.push(searchedValue.value)
    }

    if (shortcutBtnsData.length > 6) {
      shortcutBtnsData.shift()
    }
    //  Gifs Fetching
    fetchingGifsFromAPI(
      gifItemsConainer,
      `${queryURL}search?q=${searchedValue.value}&limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`,
    )
    mainShortcutBtnsBlock.render()
    activatingShortcutBtns()
  }
})

trendingBtn.addEventListener(() => {
  // Fetching
  fetchingGifsFromAPI(
    gifItemsConainer,
    `${queryURL}trending?limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`,
  )
})
