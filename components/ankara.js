// Class representing a fabric design
class FabricDesign {
    constructor(name, patterns) {
      this.name = name;
      this.patterns = patterns;
    }
  }
  
  // Class representing an Ankara fabric design
  class AnkaraDesign extends FabricDesign {
    constructor(name, patterns) {
      super(name, patterns);
      this.designLookupTable = {
        happy: {
          25: this.patterns[1],
          35: this.patterns[2],
          45: this.patterns[3]
        },
        sad: {
          25: this.patterns[4],
          35: this.patterns[5],
          45: this.patterns[6]
        }
      };
    }
  
    // Function to predict the fabric design change based on mood and temperature
    predictDesignChange(mood, temperature) {
      const moodTable = this.designLookupTable[mood];
      if (!moodTable) {
        throw new Error(`Invalid mood: ${mood}`);
      }
  
      const temperatureKeys = Object.keys(moodTable).map(Number).sort((a, b) => a - b);
      let predictedDesign = moodTable[temperatureKeys[0]];
  
      for (let i = 0; i < temperatureKeys.length; i++) {
        const currentTemp = temperatureKeys[i];
        if (temperature >= currentTemp) {
          predictedDesign = moodTable[currentTemp];
        } else {
          break;
        }
      }
  
      return predictedDesign;
    }
  }
  