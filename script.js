const crops = [
    { name: "Wheat", bestPractices: "Plant in well-drained soil." },
    { name: "Rice", bestPractices: "Requires a lot of water; monitor pH." },
    { name: "Corn", bestPractices: "Needs full sun and rich soil." },
    { name: "Soybean", bestPractices: "Rotate with other crops." },
];

const soilTips = [
    "Test your soil pH regularly.",
    "Add organic matter to improve soil structure.",
    "Use cover crops to prevent erosion."
];

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

function searchCrops() {
    const searchValue = document.getElementById("cropSearch").value.toLowerCase();
    const filteredCrops = crops.filter(crop => crop.name.toLowerCase().includes(searchValue));
    displayCrops(filteredCrops);
}

function loadSoilTips() {
    const soilTipContainer = document.getElementById("soilTips");
    soilTipContainer.innerHTML = soilTips.join("<br>");
}

document.addEventListener("DOMContentLoaded", () => {
    displayCrops(crops); // Show all crops on page load
    loadSoilTips(); // Load soil tips on page load
});
