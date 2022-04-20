

export const harvestPlants = (plantsArray) => {
    const harvestedPlants = []
    let outputValue = 0
    for (const growingPlant of plantsArray) {
        outputValue = growingPlant.output
        if (growingPlant.type !== "Corn") {
            for (let i = 0; i < outputValue; i++) {
                harvestedPlants.push(growingPlant)
            }
        } else {
            for (let i = 0; i < outputValue / 2; i++) {
                harvestedPlants.push(growingPlant)
            }
        }
    }
    return harvestedPlants
}