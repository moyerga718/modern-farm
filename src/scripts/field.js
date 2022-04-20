import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'


const allPlants = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === true) {
        for (const seed of seedObj) {
            allPlants.push(seed)
        }
    } else {
        allPlants.push(seedObj)
    }
}

export const usePlants = () => {
    const allPlantsCopy = [...allPlants]
    return allPlantsCopy
}


/*

TEST TO SEE IF FUNCTIONS WORK CORRECTLY

const corn = createCorn()
const asp = createAsparagus()

addPlant(corn)
addPlant(asp)

let myPlants = usePlants()

console.log(myPlants)

*/

