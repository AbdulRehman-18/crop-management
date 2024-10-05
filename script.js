const cropsData = [
    { name: "Wheat", bestPractices: "Ensure proper irrigation and pest control." },
    { name: "Rice", bestPractices: "Plant in flooded fields to control weeds." },
    { name: "Corn", bestPractices: "Use crop rotation to improve soil health." },
    { name: "Barley", bestPractices: "Harvest when moisture content is low." },
    { name: "Soybean", bestPractices: "Inoculate seeds with rhizobia." },
];

const soilTipsData = [
    "Maintain soil pH between 6.0 and 7.5.",
    "Use organic matter to improve soil structure.",
    "Regularly test soil for nutrient levels.",
    "Rotate crops to prevent soil nutrient depletion."
];

function loadData() {
    displayCrops(cropsData);
    displaySoilTips(soilTipsData);
}

function displayCrops(cropList) {
    const cropContainer = document.getElementById("cropList");
    cropContainer.innerHTML = ""; // Clear previous results

    cropList.forEach(crop => {
        const cropCard = document.createElement("div");
        cropCard.className = "col-md-4 mb-3";
        cropCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${crop.name}</h5>
                    <p class="card-text">${crop.bestPractices}</p>
                </div>
            </div>
        `;
        cropContainer.appendChild(cropCard);
    });
}

function displaySoilTips(soilTips) {
    const soilTipContainer = document.getElementById("soilTips");
    soilTipContainer.innerHTML = soilTips.join("<br>");
}

function searchCrops() {
    const searchValue = document.getElementById("cropSearch").value.toLowerCase();
    const filteredCrops = cropsData.filter(crop => crop.name.toLowerCase().includes(searchValue));
    displayCrops(filteredCrops);
}

document.addEventListener("DOMContentLoaded", loadData);
