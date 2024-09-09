function updateFitnessData() {
    // Get personal information from input fields
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    if (!name || !age || !weight || !height) {
        alert("Please enter all personal information!");
        return;
    }

    // Simulate fitness data (steps, calories, duration, distance)
    const steps = Math.floor(Math.random() * 10000);
    const calories = (steps * 0.045).toFixed(2); // Calories burned per step
    const duration = (steps * 0.007).toFixed(1); // 1 min per ~140 steps
    const distance = (steps * 0.0008).toFixed(2); // ~0.0008 km per step
    
    // Update the fitness data on the page
    document.getElementById('steps').innerText = steps;
    document.getElementById('calories').innerText = calories;
    document.getElementById('duration').innerText = duration + ' min';
    document.getElementById('distance').innerText = distance + ' km';

    // Log the personal info (for further development, could store data)
    console.log(`User: ${name}, Age: ${age}, Weight: ${weight}kg, Height: ${height}cm`);
}
