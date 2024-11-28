// Opens the modal for disease selection
function openModal(disease) {
    document.getElementById("disease-modal").style.display = "block";
    populateDiseaseOptions(disease);
  }
  
  // Closes the modal
  function closeModal() {
    document.getElementById("disease-modal").style.display = "none";
  }
  
  // Dynamically populate disease-specific sub-options
  function populateDiseaseOptions(disease) {
    const diseaseOptions = {
      cough: ["Acute Cough", "Subacute Cough", "Dry Cough"],
      bodypain: ["Back Pain", "Elbow Pain", "Foot and Ankle Pain", "Hip Pain", "Neck Pain", "Shoulder Pain", "Hand and Wrist Pain", "Knee Pain"],
      headache: ["Tension Headaches", "Migraines", "Cluster Headaches", "Sinus Headaches", "Exertion Headaches", "Hypnic Headaches"]
    };
  
    const subOptions = diseaseOptions[disease];
    const selectElement = document.getElementById("disease-subtype");
  
    selectElement.innerHTML = "";
    subOptions.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option.toLowerCase().replace(/\s+/g, "-");
      optionElement.innerText = option;
      selectElement.appendChild(optionElement);
    });
  
    document.getElementById("disease-options").style.display = "block";
  }
  
  // Shows the female-specific options (pregnant, on periods, etc.)
  function showFemaleOptions() {
    const sex = document.getElementById("sex").value;
    const femaleOptions = document.getElementById("female-options");
  
    if (sex === "female") {
      femaleOptions.style.display = "block";
    } else {
      femaleOptions.style.display = "none";
    }
  }
  
  // Show the recommended medicine based on user input
  function showMedicineDetails() {
    const age = document.getElementById("age").value;
    const ageRange = document.getElementById("age-range").value;
    const sex = document.getElementById("sex").value;
    const femaleCondition = sex === "female" ? document.getElementById("female-condition").value : "";
    const diseaseSubtype = document.getElementById("disease-subtype").value;
    
    let medicine = "";
  
    if (diseaseSubtype === "acute-cough") {
      medicine = "Cough Syrup (for Acute Cough)";
    } else if (diseaseSubtype === "subacute-cough") {
      medicine = "Antibiotic Cough Syrup (for Subacute Cough)";
    } else if (diseaseSubtype === "dry-cough") {
      medicine = "Dry Cough Medicine (for Dry Cough)";
    } else if (diseaseSubtype === "back-pain") {
      medicine = "Pain Relievers for Back Pain";
    } else if (diseaseSubtype === "elbow-pain") {
      medicine = "Elbow Pain Relief";
    } else if (diseaseSubtype === "foot-and-ankle-pain") {
      medicine = "Foot and Ankle Pain Medicine";
    } else if (diseaseSubtype === "neck-pain") {
      medicine = "Neck Pain Medicine";
    } else if (diseaseSubtype === "tension-headaches") {
      medicine = "Pain Killers for Tension Headaches";
    } else {
      medicine = "Please select a valid disease type.";
    }
  
    // Display medicine details
    const medicineDetailsDiv = document.getElementById("medicine-details");
  
    // Ensure the div is shown after populating the details
    if (medicine) {
      medicineDetailsDiv.innerHTML = `<h3>Recommended Medicine:</h3><p>${medicine}</p>`;
      medicineDetailsDiv.style.display = "block";
    }
  }
  