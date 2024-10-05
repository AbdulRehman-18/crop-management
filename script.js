// Sample data for crops, soil, and diseases
const crops = [
    {
        name: "Wheat",
        best_practices: "Use organic fertilizer and practice crop rotation.",
        soil_requirements: "Loamy soil with pH 6.0-7.0",
        climate: "Temperate climate, requires full sun.",
        common_diseases: "Rust, Bacterial blight"
    },
    {
        name: "Rice",
        best_practices: "Maintain waterlogged conditions during growth.",
        soil_requirements: "Clayey soil with pH 5.5-6.5",
        climate: "Tropical and subtropical climates.",
        common_diseases: "Rice blast, Sheath blight"
    },
    {
        name: "Maize",
        best_practices: "Regular irrigation and pest control.",
        soil_requirements: "Well-drained sandy loam with pH 5.8-7.0",
        climate: "Warm climate, requires full sun.",
        common_diseases: "Leaf blight, Root rot"
    }
];

let soil = {
    ph: 6.5,
    moisture: "Moderate",
    nutrients: "Nitrogen, Phosphorus, Potassium"
};

const diseases = [
    {
        name: "Rust",
        description: "A fungal disease that causes reddish-brown spots on leaves.",
        remedies: "Apply fungicides and remove infected plants."
    },
    {
        name: "Bacterial blight",
        description: "Caused by bacteria, leading to water-soaked lesions on leaves.",
        remedies: "Use resistant varieties and ensure good drainage."
    },
    {
        name: "Rice blast",
        description: "A fungal disease that causes lesions on rice plants.",
        remedies: "Apply fungicides and practice crop rotation."
    }
];

// Function to display crop list
function displayCrops() {
    const cropListElement = document.getElementById('cropList');
    crops.forEach(crop => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <strong>${crop.name}</strong>
            <p>Best Practices: ${crop.best_practices}</p>
            <p>Soil Requirements: ${crop.soil_requirements}</p>
            <p>Climate: ${crop.climate}</p>
            <p>Common Diseases: ${crop.common_diseases}</p>
        `;
        cropListElement.appendChild(li);
    });
}

// Function to display soil data
function displaySoilData() {
    document.getElementById('soilPh').innerText = `pH: ${soil.ph}`;
    document.getElementById('soilMoisture').innerText = `Moisture: ${soil.moisture}`;
    document.getElementById('soilNutrients').innerText = `Nutrients: ${soil.nutrients}`;
}

// Function to display diseases
function displayDiseases() {
    const diseaseListElement = document.getElementById('diseaseList');
    diseases.forEach(disease => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <strong>${disease.name}</strong>
            <p>Description: ${disease.description}</p>
            <p>Remedies: ${disease.remedies}</p>
        `;
        diseaseListElement.appendChild(li);
    });
}

// Function to update soil data (for demonstration)
function updateSoilData() {
    soil.ph = (Math.random() * (7.0 - 4.0) + 4.0).toFixed(1); // Random pH between 4.0 and 7.0
    soil.moisture = Math.random() > 0.5 ? "High" : "Low"; // Random moisture
    soil.nutrients = Math.random() > 0.5 ? "Nitrogen, Phosphorus" : "Potassium, Magnesium"; // Random nutrients
    displaySoilData();
}

// Initialize the app
function init() {
    displayCrops();
    displaySoilData();
    displayDiseases();
}

// Attach event listener for soil update button
document.getElementById('updateSoil').addEventListener('click', updateSoilData);

// Call init on page load
init();
