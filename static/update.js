function populateSelectOptions(selectId, optionsArray){
    var selectElement=document.getElementById(selectId);
    optionsArray.forEach(function(option){
        var optionElement=document.createElement("option")
        optionElement.value=option;
        optionElement.textContent=option;
        selectElement.appendChild(optionElement)
    });
}
populateSelectOptions("designation", config.update.designations);
populateSelectOptions("project", config.update.projects);
populateSelectOptions("employment_status", config.update.employmentStatus);
populateSelectOptions("location", config.update.locations);
populateSelectOptions("status", config.update.statuses);