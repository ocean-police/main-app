const clothingWeightByType = {
    "Short Sleeve": 180,
    "Long Sleeve": 250,
    "Sweater": 500,
    "Swim Suit": 700,
    "Bra": 200,
    "Skirt": 400,
    "Pants": 400,
    "Legging/Tights": 300,
    "Shorts": 300,
    "Underwear": 200,
    "Dress": 800,
    "Socks": 100,
    "Scarf": 300,
    "Gloves": 150,
    "Hat": 200,
    "Jacket": 1000,
    "Swim Bottoms": 350,
    "Swim Top": 350,
    "Hoodie": 600,
    "Windbreaker": 1800
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

const colorsByMaterialType = {
    "Polyester": "F8B195",
    "Polyamide": "AE94C5",
    "Nylon": "FFCB74",
    "Acrylic": "BF6C84",
    "Polypropylene": "6590B2",
    "Elastane": "F2A45D",
    "Spandex": "6B5C7B",
    "Lycra": "DB97DB",
    "Acetate": "BF5976",
    "Cotton": "B8E986",
    "Rayon": "86B358",
    "Modal": "79C4E0",
    "Lyocell": "2797DB",
    "Linen": "50E3C2",
    "Wool": "F2AD53",
    "Cashmere": "3EB097",
    "Viscose": "E7E37F"
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

    calculateNumberOfPlasticBags(particlesInGrams, plasticBagWeightInGrams = 5) {
        return (particlesInGrams / plasticBagWeightInGrams)
    }
}

export { colorsByMaterialType, clothingWeightByType, numberOfParticlesPerWashByMaterialType, PolutionInfoProvider };