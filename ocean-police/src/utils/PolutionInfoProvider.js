const clothingWeightByType = {
    "t-shirt": 200,
    "jeans": 400
};

const numberOfParticlesPerWashByMaterialType = {
    "cotton": 1369,
    "nylon": 1562,
    "polyesters": 4202
};

class PolutionInfoProvider {
    calculateTotalNumberOfParticlesPerWash(clothing) {
        const clothingType = clothing["type"]

        if (Object.keys(clothingWeightByType).indexOf(clothingType) < 0) {
            throw "Invalid clothing type: " + clothingType
        }

        const clothingWeight = clothingWeightByType[clothingType];
        
        return clothing["materials"]
            .map(material => { 
                return this.calculateNumberOfParticlesPerWash(material, clothingWeight);
            }).reduce((totalNumberOfParticlesPerWash, materialNumberOfParticlesPerWash) => {
                return totalNumberOfParticlesPerWash + materialNumberOfParticlesPerWash
            })
    }

    calculateNumberOfParticlesPerWash(material, clothingWeightInGrams) {
        const materialType = material["type"]

        if (Object.keys(numberOfParticlesPerWashByMaterialType).indexOf(materialType) < 0) {
            throw "Invalid material type: " + materialType
        }

        const materialWeightInGrams = clothingWeightInGrams * material["percentage"] / 100
        const numberOfParticlesPerGram = numberOfParticlesPerWashByMaterialType[materialType]
        return materialWeightInGrams * numberOfParticlesPerGram
    } 
}

export default PolutionInfoProvider;