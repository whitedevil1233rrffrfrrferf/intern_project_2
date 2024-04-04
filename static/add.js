
function populateSelectOptions(selectId, optionsArray){
    var selectElement=document.getElementById(selectId);
    optionsArray.forEach(function(option){
        var optionElement=document.createElement("option")
        optionElement.value=option;
        optionElement.textContent=option;
        selectElement.appendChild(optionElement)
    });
}
populateSelectOptions("designation", config.add.designations);
populateSelectOptions("project", config.add.projects);
populateSelectOptions("employment_status", config.add.employmentStatus);
populateSelectOptions("location", config.add.locations);
populateSelectOptions("status", config.add.statuses);

