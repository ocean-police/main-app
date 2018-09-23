import { numberOfParticlesPerWashByMaterialType } from './PolutionInfoProvider';

class ClothingMaterialsRecognizer {
    validateMaterialsTotalPercentage(materials) {
        const totalPercentage = materials
            .map(material => { return material["percentage"] })
            .reduce((totalPercentage, percentage) => {
            return totalPercentage + percentage
            })
        
        if (totalPercentage !== 100) {
            throw "Invalid total percentage: " + totalPercentage
        }
    }

    compareMaterialTypesEqual(word1, word2, mistakesAllowed = 2) {
        if(word1 === word2)
            return true;
    
        if (word1.length === word2.length) {
            for (var i = 0; i < word1.length; i++) {
                if (word1.charAt(i) !== word2.charAt(i)) {
                    mistakesAllowed--;
                    if (mistakesAllowed < 0) {
                        return false;
                    }
                }
            }
        }
    
        return true;
    }

    findMatchedMaterialType(parsedMaterialType) {
        var resultMaterialType = undefined;

        Object.keys(numberOfParticlesPerWashByMaterialType).forEach(validType => {
            if (this.compareMaterialTypesEqual(parsedMaterialType.toUpperCase(), validType.toUpperCase())) {
                resultMaterialType = validType;
            }
        })

        return resultMaterialType;
    }

    remapMaterialsTypeToValid(materials) {
        return materials.map(material => {
            const materialType = material["type"];
            const validType = this.findMatchedMaterialType(materialType)

            if (validType === undefined) {
                throw "Invalid type: " + materialType
            }

            return { ...material, "type": validType}
        })
    }

    findMaterialsFromLabelText(labelText) {
        const unparsedMaterials = labelText.match(/[0-9]+ *% *[a-zA-Z]+/g);
        const materials = unparsedMaterials.map(combinedPercentageAndType => {
            const components = combinedPercentageAndType
                .split("%")
                .map(string => { return string.trim() })
            
            if (components.length !== 2) {
                throw "Invalid material components: " + components
            }

            return {
                "type": components[1],
                "percentage": parseInt(components[0], 10)
            }
        });
        return materials
    }

    resize(file, MAX_WIDTH = 600, MAX_HEIGHT = 600) {
        return new Promise((resolve, reject) => {
            // Create an image
            var img = document.createElement("img");
            // Create a file reader
            var reader = new FileReader();
            
            console.log("Read image")
            
            // Set the image once loaded into file reader
            reader.onload = function (e) {
                console.log("Did read image")

                img.src = e.target.result;
    
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
    
                var width = img.width;
                var height = img.height;
    
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                
                if (width > height) {
                    ctx.rotate(-90 * Math.PI / 180)

                    const temp = width
                    width = height
                    height = temp
                }

                ctx.drawImage(img, 0, 0, width, height);

                resolve(img)
            }
            // Load files into file reader
            reader.readAsDataURL(file);
        })
    }

    recognize(imageFile) {
        return new Promise(
            (resolve, reject) => {
                console.log("Resize image")
                this.resize(imageFile).then(resizedImage => {
                    console.log("Start image recognition: ")
                    
                    window.Tesseract.recognize(resizedImage).then(result => {
                        console.log("Finished image recognition")
                        
                        const recognizedText = result["text"]
                        const materials = this.findMaterialsFromLabelText(recognizedText)

                        this.validateMaterialsTotalPercentage(materials);
                        const validMaterials = this.remapMaterialsTypeToValid(materials);

                        console.log("Validated materials: ")
                        console.log(validMaterials)

                        resolve(validMaterials)
                    }).catch(error => {
                        console.log("Failed image recognition: " + error)
                        reject(error)
                    })
                })
            }    
        ); 
    }
}

export default ClothingMaterialsRecognizer;