const countriesAPi = "https://restcountries.com/v2/all"

// Using Async await

/* const fetchCountries = async () => {
  try {
    const request = await fetch(countriesAPi)
    const response = await request.json()
    let countriesData = response
    console.log(countriesData)
  } catch {
    ;(error) => {
      console.log(error)
    }
  }
}
fetchCountries() */

const reload = document.getElementById("reload")
reload.addEventListener("click", () => {
  location.reload()
})

// USing Fetch

fetch(countriesAPi)
  .then((req) => {
    return req.json()
  })
  .then((data) => {
    localStorage.setItem("countries", JSON.stringify(data))
  })

//   Retrieve data from local storage
const world = JSON.parse(localStorage.getItem("countries"))
let worldCountries = [...world]
// Filter starts here

const inputBox = document.getElementById("inputBox")

inputBox.addEventListener("input", (e) => {
  worldCountries = worldCountries.filter((filteredCountry) => {
    return (
      filteredCountry.name
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase()) ||
      filteredCountry.region
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase())
    )
  })

  const countries_display = document.getElementById("countries-display")

  let injectedDiv = ""

  for (let country of worldCountries) {
    const { name, capital, languages, flag, population, region } = country

    injectedDiv += `<div class='country'>
  <div class='flag'><img src='${flag}' alt='country flag'/></div>
  <div class='country-details'>
    <span style='font-weight:bold; font-size:20px'>${name}</span>
    <span style='float:right'><b>Capital:</b> ${capital}</span>
  </div> 
  <div class='country-details middle-countries-details'>
    <span style='font-weight:bold; font-size:17px'>${region.toUpperCase()}</span>
    <span style='float:right'><b>Population: </b>${population}</span>
  </div>
  <div><b>NUMBER OF LANGUAGES: </b> ${languages.length}</diV>
  </div>`
  }
  countries_display.innerHTML = injectedDiv

  console.log(worldCountries, "array")
  // End of filter
})

// outside
const countries_display = document.getElementById("countries-display")

let injectedDiv = ""

for (let country of worldCountries) {
  const { name, capital, languages, flag, population, region } = country

  injectedDiv += `<div class='country'>
  <div class='flag'><img src='${flag}' alt='country flag'/></div>
  <div class='country-details'>
    <span style='font-weight:bold; font-size:20px'>${name}</span>
    <span style='float:right'><b>Capital:</b> ${capital}</span>
  </div> 
  <div class='country-details middle-countries-details'>
    <span style='font-weight:bold; font-size:17px'>${region.toUpperCase()}</span>
    <span style='float:right'><b>Population: </b>${population}</span>
  </div>
  <div><b>NUMBER OF LANGUAGES: </b> ${languages.length}</diV>
  </div>`
}
countries_display.innerHTML = injectedDiv
