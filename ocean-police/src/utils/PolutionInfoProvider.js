const clothingWeightByType = {
    "t-shirt": 200,
    "jeans": 400
};

const numberOfParticlesPerWashByMaterialType = {
    "Polyester": 1389,
    "Polyamide": 2470,
    "Nylon": 2470,
    "Acrylic": 1359,
    "Polypropylene": 687,
    "Elastane": 1389,
    "Spandex": 1389,
    "Lycra": 1389,
    "Acetate": 1389,
    "Cotton": 0,
    "Rayon": 0,
    "Modal": 0,
    "Lyocell": 0,
    "Linen": 0,
    "Wool": 0,
    "Cashmere": 0,
    "Viscose": 0
};

const numberOfDaysInYear = 365

class PolutionInfoProvider {
    calculateTotalNumberOfParticlesPerLifeCircle(clothing, lifeCircleInDays = 2 * numberOfDaysInYear) {
        const totalNumberOfParticlesPerWash = this.calculateTotalNumberOfParticlesPerWash(clothing)
        const washingPeriod = clothing["washingPeriod"]
        return lifeCircleInDays / washingPeriod * totalNumberOfParticlesPerWash
    }

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

    convertNumberOfParticlesToWeightInGrams(numberOfParticles) {
        return numberOfParticles * 0.0000007
    }
}

export { numberOfParticlesPerWashByMaterialType };
export default PolutionInfoProvider;