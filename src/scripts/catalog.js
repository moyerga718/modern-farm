

const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = ""


export const Catalog = (harvestedFoodArray) => {
    for (const singleVeggie of harvestedFoodArray) {
        parentHTMLElement.innerHTML += `<section class="plant">${singleVeggie.type}</section>`
    }
}