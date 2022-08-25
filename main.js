import { queryURL, params } from './config/config.js'
import { fetchingGifsFromAPI } from './common/fetchinGifApi.js'

const idOfGifItemsContainer = document.getElementById('gifs_container')
const submitBtn = document.getElementById('submitBtn')
const trendingBtn = document.getElementById("trendingBtn");


fetchingGifsFromAPI(
  idOfGifItemsContainer,
  `${queryURL}search?q=${searchedValue.value}&limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`,
)

// Submit btn
submitBtn.addEventListener('click', () => {
  const searchedValue = document.getElementById('searchedValue')
})


trendingBtn.addEventListener("click", () => {
    fetchingGifsFromAPI(
      idOfGifItemsContainer,
      `${queryURL}trending?limit=${params.limit}&api_key=${params.api_key}&fmt=${params.fmt}`
    );
  });
