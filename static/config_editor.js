// Function to populate input fields with existing configuration values
function populateInputFields() {
    document.getElementById("projects").value = config.home.projects.join(", ");
    document.getElementById("designations").value = config.home.designations.join(", ");
    document.getElementById("employmentStatuses").value = config.home.employment_statuses.join(", ");
    document.getElementById("statuses").value = config.home.statuses.join(", ");
    document.getElementById("locations").value = config.home.locations.join(", ");
}

// Function to update configuration values based on form submission
function updateConfigValues(event) {
    event.preventDefault(); // Prevent default form submission
  
    config.home.projects = document.getElementById("projects").value.split(",").map(value => value.trim());
    config.home.designations = document.getElementById("designations").value.split(",").map(value => value.trim());
    config.home.employment_statuses = document.getElementById("employmentStatuses").value.split(",").map(value => value.trim());
    config.home.statuses = document.getElementById("statuses").value.split(",").map(value => value.trim());
    config.home.locations = document.getElementById("locations").value.split(",").map(value => value.trim());
  
    // Output the updated configuration to console
    console.log("Updated Configuration:", config);
  
    // Send the updated configuration to the server for saving (you'll need to implement this)
    saveConfigToServer(config);
}

// Function to populate input fields with existing "add" configuration values
function populateInputFieldsAdd() {
    document.getElementById("addProjects").value = config.add.projects.join(", ");
    document.getElementById("addDesignations").value = config.add.designations.join(", ");
    document.getElementById("addEmploymentStatus").value = config.add.employmentStatus.join(", ");
    document.getElementById("addStatuses").value = config.add.statuses.join(", ");
    document.getElementById("addLocations").value = config.add.locations.join(", ");
}

// Function to populate input fields with existing "update" configuration values
function populateInputFieldsUpdate() {
    document.getElementById("updateProjects").value = config.update.projects.join(", ");
    document.getElementById("updateDesignations").value = config.update.designations.join(", ");
    document.getElementById("updateEmploymentStatus").value = config.update.employmentStatus.join(", ");
    document.getElementById("updateStatuses").value = config.update.statuses.join(", ");
    document.getElementById("updateLocations").value = config.update.locations.join(", ");
}

// Function to update "add" configuration values based on form submission
function updateConfigValuesAdd(event) {
    event.preventDefault(); // Prevent default form submission
  
    config.add.projects = document.getElementById("addProjects").value.split(",").map(value => value.trim());
    config.add.designations = document.getElementById("addDesignations").value.split(",").map(value => value.trim());
    config.add.employmentStatus = document.getElementById("addEmploymentStatus").value.split(",").map(value => value.trim());
    config.add.statuses = document.getElementById("addStatuses").value.split(",").map(value => value.trim());
    config.add.locations = document.getElementById("addLocations").value.split(",").map(value => value.trim());
  
    // Output the updated configuration to console
    console.log("Updated Add Configuration:", config.add);
  
    // Send the updated configuration to the server for saving (you'll need to implement this)
    saveConfigToServer(config);
}

// Function to update "update" configuration values based on form submission
function updateConfigValuesUpdate(event) {
    event.preventDefault(); // Prevent default form submission
  
    config.update.projects = document.getElementById("updateProjects").value.split(",").map(value => value.trim());
    config.update.designations = document.getElementById("updateDesignations").value.split(",").map(value => value.trim());
    config.update.employmentStatus = document.getElementById("updateEmploymentStatus").value.split(",").map(value => value.trim());
    config.update.statuses = document.getElementById("updateStatuses").value.split(",").map(value => value.trim());
    config.update.locations = document.getElementById("updateLocations").value.split(",").map(value => value.trim());
  
    // Output the updated configuration to console
    console.log("Updated Update Configuration:", config.update);
  
    // Send the updated configuration to the server for saving (you'll need to implement this)
    saveConfigToServer(config);
}

// Populate input fields with existing "add" configuration values when the page loads
populateInputFieldsAdd();

// Populate input fields with existing "update" configuration values when the page loads
populateInputFieldsUpdate();

// Add event listener for "add" form submission
document.getElementById("addForm").addEventListener("submit", updateConfigValuesAdd);

// Add event listener for "update" form submission
document.getElementById("updateForm").addEventListener("submit", updateConfigValuesUpdate);

// Function to save the updated configuration to the server
function saveConfigToServer(config) {
    fetch('/update_config', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save configuration');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Populate input fields with existing configuration values when the page loads
populateInputFields();

// Add event listener for form submission
document.getElementById("configForm").addEventListener("submit", updateConfigValues);

function populateInputFieldsUploadResume() {
    var selectRoleOptions = config.upload_resume.select_role.join(", ");
    document.getElementById("selectRole").value = selectRoleOptions;
}

// Populate input fields with existing "upload_resume" configuration values when the page loads
populateInputFieldsUploadResume();

function updateConfigValuesUploadResume(event) {
    event.preventDefault(); // Prevent default form submission

    config.upload_resume.select_role = document.getElementById("selectRole").value.split(",").map(value => value.trim());

    // Output the updated configuration to console
    console.log("Updated Upload Resume Configuration:", config.upload_resume);

    // Send the updated configuration to the server for saving (you'll need to implement this)
    saveConfigToServer(config);
}

document.getElementById("uploadResumeForm").addEventListener("submit", updateConfigValuesUploadResume);