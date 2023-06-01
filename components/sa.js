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
    }
  
    // Function to predict the fabric design change based on mood and temperature
    predictDesignChange(mood, temperature) {
      // Normalize temperature to a range of 0-1
      const normalizedTemp = (temperature - 20) / 30;
  
      // Get the pattern index based on mood
      const moodIndex = mood === 'happy' ? 0 : 1;
  
      // Calculate the predicted design index
      const designIndex = Math.floor(normalizedTemp * (this.patterns.length - 1));
  
      // Retrieve the predicted design
      const predictedDesign = this.patterns[designIndex];
  
      return predictedDesign;
    }
  }
  