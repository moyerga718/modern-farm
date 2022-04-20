import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const cornSeed = createCorn()
console.log(cornSeed)

const aspSeed = createPotato()
console.log(aspSeed)

let plantVar = usePlants()

console.log(plantVar)

const examplePlantingPlan = [
    ["Corn", "Soybean", "Soybean", "Potato"],
    ["Wheat", "Potato", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Potato"],
    ["Asparagus", "Soybean", "Potato", "Corn"]
]

console.log(examplePlantingPlan)

plantSeeds(examplePlantingPlan)

const allMyPlants = usePlants()
console.log(allMyPlants)

const myHarvestedPlants = harvestPlants(allMyPlants)

console.log(myHarvestedPlants)

Catalog(myHarvestedPlants)

