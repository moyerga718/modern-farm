// define and export a plantSeeds function, which accepts planting plan as an input.

import { addPlant } from "./field.js"
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'


export const plantSeeds = (myPlantingPlan) => {
    //myPlantingPlan is an array w/ 4 arrays in it. Each nested array will have a list of foods.
    // loop through parent array 
    for (const childArray of myPlantingPlan){
        //loop through veggies in child array, create appropriate seed for each and add to field 
        for (const veggies of childArray) {
            let newSeed = null
            if (veggies === "Asparagus") {
                newSeed = createAsparagus()
            } else if (veggies === "Corn" ) {
                newSeed = createCorn()
            } else if (veggies === "Potato" ) {
                newSeed = createPotato()
            } else if (veggies === "Soybean" ) {
                newSeed = createSoybean()
            } else if (veggies === "Sunflower" ) {
                newSeed = createSunflower()
            } else if (veggies === "Wheat" ) {
                newSeed = createWheat()
            } 
            addPlant(newSeed)
        }
    }           
}