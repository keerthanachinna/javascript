function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
  
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Please enter valid values for height and weight.');
      return;
    }
  
    const bmi = calculateBMIValue(height, weight);
    const category = getBMICategory(bmi);
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)} - ${category}`;
  }
  
  function calculateBMIValue(height, weight) {
    const heightInMeters = height / 100; // Convert height from cm to meters
    return weight / (heightInMeters * heightInMeters);
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  