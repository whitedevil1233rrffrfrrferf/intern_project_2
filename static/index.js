const name = document.getElementById("search_bar");
const tableRows = document.querySelectorAll("tbody tr");

name.addEventListener("keyup", function(e) {
    const searchValue = e.target.value.toLowerCase();
    tableRows.forEach(function(row) {
        const nameCell = row.querySelector("#Name"); // Target the cell with id="Name"
        const nameValue = nameCell.textContent.toLowerCase();
        if (nameValue.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none"; // Hide the row
        }
    });
});
// const selectedItem=document.getElementById("project")
// selectedItem.addEventListener("change",function(){
//     var searchContent=selectedItem.value.toLowerCase()
//     tableRows.forEach(function(row){
//         var projectCell=row.querySelector("#Project")
//         var projectValue=projectCell.textContent.toLowerCase();
//         if (projectValue.includes(searchContent)){
//             row.style.display="";
//         }else{
//             row.style.display="none"
//         }
//     })
// })

// const selectedDesignation=document.getElementById("designation")
// selectedDesignation.addEventListener("change",function(){
//     var searchContent=selectedDesignation.value.toLowerCase()
//     tableRows.forEach(function(row){
//         var designationCell=row.querySelector("#Designation")
//         var designationValue=designationCell.textContent.toLowerCase()
//         if (designationValue.includes(searchContent)){
//             row.style.display="";
//         }
//         else{
//             row.style.display="none"
//         }
//     })
// })
// const selectedEmploymentStatus=document.getElementById("employment_status")
// selectedEmploymentStatus.addEventListener("change",function(){
//     var searchContent=selectedEmploymentStatus.value.toLowerCase()
//     tableRows.forEach(function(row){
//         const employmentCell=row.querySelector("#employment_status")
//         const employmentValue=employmentCell.textContent.toLowerCase()
//         if (employmentValue.includes(searchContent)){
//             row.style.display="";
//         }
//         else{
//             row.style.display="none"
//         }
//     })
// })
// const selectedEmployeeStatus = document.getElementById("status");
// selectedEmployeeStatus.addEventListener("change", function() {
//     const employeeStatusSearchContent = selectedEmployeeStatus.value.toLowerCase();

//     tableRows.forEach(function(row) {
//         const employeeStatusCell = row.querySelector("#employee_status");
//         const employeeStatusValue = employeeStatusCell.textContent.toLowerCase();

//         if (!employeeStatusSearchContent || employeeStatusValue.includes(employeeStatusSearchContent)) {
//             row.style.display = "";
//         } else {
//             row.style.display = "none";
//         }
//     });
// });

// const selectedItem = document.getElementById("project");
// selectedItem.addEventListener("change", filterTable);

// const selectedDesignation = document.getElementById("designation");
// selectedDesignation.addEventListener("change", filterTable);

// const selectedEmploymentStatus = document.getElementById("employment_status");
// selectedEmploymentStatus.addEventListener("change", filterTable);

// function filterTable() {
//     const projectSearchContent = document.getElementById("project").value.toLowerCase();
//     const designationSearchContent = document.getElementById("designation").value.toLowerCase();
//     const employmentStatusSearchContent = document.getElementById("employment_status").value.toLowerCase();

//     tableRows.forEach(function (row) {
//         const projectCell = row.querySelector("#Project").textContent.toLowerCase();
//         const designationCell = row.querySelector("#Designation").textContent.toLowerCase();
//         const employmentStatusCell = row.querySelector("#employment_status").textContent.toLowerCase();

        
//         const projectMatch = !projectSearchContent || projectCell.includes(projectSearchContent);
//         const designationMatch = !designationSearchContent || designationCell.includes(designationSearchContent);
//         const employmentStatusMatch = !employmentStatusSearchContent || employmentStatusCell.includes(employmentStatusSearchContent);

        
//         if (
//             (projectMatch && designationMatch && employmentStatusMatch) ||
//             (projectMatch && !designationSearchContent && !employmentStatusSearchContent) ||
//             (!projectSearchContent && designationMatch && !employmentStatusSearchContent) ||
//             (!projectSearchContent && !designationSearchContent && employmentStatusMatch)
//         ) {
//             row.style.display = "";
//         } else {
            
//             row.style.display = "none";
//         }
//     });

// }


const selectedProject = document.getElementById("project");
const selectedDesignation = document.getElementById("designation");
const selectedEmploymentStatus = document.getElementById("employment_status");
const selectedEmployeeStatus = document.getElementById("status");

selectedProject.addEventListener("change", filterTable);
selectedDesignation.addEventListener("change", filterTable);
selectedEmploymentStatus.addEventListener("change", filterTable);
selectedEmployeeStatus.addEventListener("change", filterTable);

function filterTable() {
    const projectSearchContent = selectedProject.value.toLowerCase();
    const designationSearchContent = selectedDesignation.value.toLowerCase();
    const employmentStatusSearchContent = selectedEmploymentStatus.value.toLowerCase();
    const employeeStatusSearchContent = selectedEmployeeStatus.value.toLowerCase();

    tableRows.forEach(function (row) {
        const projectCell = row.querySelector("#Project").textContent.toLowerCase();
        const designationCell = row.querySelector("#Designation").textContent.toLowerCase();
        const employmentStatusCell = row.querySelector("#employment_status").textContent.toLowerCase();
        const employeeStatusCell = row.querySelector("#employee_status").textContent.toLowerCase();

        const projectMatch = !projectSearchContent || projectCell.includes(projectSearchContent);
        const designationMatch = !designationSearchContent || designationCell.includes(designationSearchContent);
        const employmentStatusMatch = !employmentStatusSearchContent || employmentStatusCell.includes(employmentStatusSearchContent);
        const employeeStatusMatch = !employeeStatusSearchContent || employeeStatusCell.includes(employeeStatusSearchContent);

        if (
            (projectMatch && designationMatch && employmentStatusMatch && employeeStatusMatch) ||
            (projectMatch && !designationSearchContent && !employmentStatusSearchContent && !employeeStatusSearchContent) ||
            (!projectSearchContent && designationMatch && !employmentStatusSearchContent && !employeeStatusSearchContent) ||
            (!projectSearchContent && !designationSearchContent && employmentStatusMatch && !employeeStatusSearchContent) ||
            (!projectSearchContent && !designationSearchContent && !employmentStatusSearchContent && employeeStatusMatch)
        ) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}



tableRows.forEach(function(row) {
    var employmentStatus = row.querySelector("#employee_status").textContent;

     

    if (employmentStatus === "resigned") {
      row.classList.add("resigned-row");
    }
  });


  function filterByMonth(status) {
    var monthMapping = {
      january: '01',
      february: '02',
      march: '03',
      april: '04',
      may: '05',
      june: '06',
      july: '07',
      august: '08',
      september: '09',
      october: '10',
      november: '11',
      december: '12',
    };
    var selectedMonth
    var selectedStatus=status
    if (selectedStatus==="active"){
        selectedMonth=document.getElementById("month_active_filter").value.toLowerCase()
        
    }
    else if(selectedStatus==="resigned"){
        selectedMonth=document.getElementById("month_resigned_filter").value.toLowerCase()
        
    }
    tableRows.forEach(function(row){
        var joinDate=row.querySelector("#joining_date").textContent;
        var employeeStatus=row.querySelector("#employee_status").textContent.toLowerCase()
        if (joinDate.toLowerCase()=="none"){
            row.style.display="none";
            return
        }
        var joinMonth=joinDate.split("-")[1]

        if (selectedMonth === "") {
            
            row.style.display = "";
            return;
        }
        
        if (joinMonth===monthMapping[selectedMonth]){
            row.style.display = employeeStatus === selectedStatus ? "" : "none";

        }
        else {
        row.style.display = "none";
    }
    })
}

function filter(status){
    const selectedDate=new Date(document.getElementById("month_active_datepicker").value);
    
    tableRows.forEach(function(row){
        const joinDateStr=row.querySelector("#joining_date").textContent;
        const employeeStatusCell = row.querySelector("#employee_status");
        if (joinDateStr.toLowerCase()=="none"){
            row.style.display="none";
            return;
        }
        
        const joinDate = parseCustomDateString(joinDateStr);
        console.log(joinDate)
        if (isNaN(joinDate.getTime())) {
            // Handle the case where joinDateStr is not a valid date
            row.style.display = "none";
            return;
        }
        
        if (joinDate < selectedDate){
            row.style.display = employeeStatusCell.textContent.toLowerCase() === status ? "" : "none";
        }    
        else{
            row.style.display = "none";
        }
        row.style.display = joinDate < selectedDate && employeeStatusCell.textContent.toLowerCase() === status ? "" : "none";
    })
}

// function month_active_resigned(status){
//     alert("hello")
//     var monthMapping = {
//         january: '01',
//         february: '02',
//         march: '03',
//         april: '04',
//         may: '05',
//         june: '06',
//         july: '07',
//         august: '08',
//         september: '09',
//         october: '10',
//         november: '11',
//         december: '12',
//     };
//     var selectedMonth;
//     var selectedStatus=status;
//     if (selectedStatus==="active"){
//         selectedMonth=document.getElementById("month_active_month_filter").value.toLowerCase()
        
//     }
//     else if (selectedStatus=="resigned") {
//         selectedMonth=document.getElementById("month_resigned_month_filter").value.toLowerCase()
        
//     }
//     tableRows.forEach(function(row){
//         var joinDate=row.querySelector("#joining_date").textContent;
//         var employeeStatus=row.querySelector("#employee_status").textContent.toLowerCase();
       
//         if (joinDate.toLowerCase()==="none"){
//             row.style.display="none";
//             return;
//         }
//         var joinMonth=joinDate.split("-")[1];

//         if (joinMonth <= monthMapping[selectedMonth]){
//             row.style.display=employeeStatus===selectedStatus?"":"none";
//         }
//         else{
//             row.style.display="none"
//         }
//     })
// }
const selectedLocation=document.getElementById("location")
selectedLocation.addEventListener("change",function(){
        const selectedLocationValue=selectedLocation.value.toLowerCase()     
        tableRows.forEach(function(row){
            const locationCell=row.querySelector("#employee_location")
            const locationValue=locationCell.textContent.toLowerCase()
            if (locationValue.includes(selectedLocationValue)){
                row.style.display=""
            }
            else{
                row.style.display="none"
            }
        })    
})
function parseCustomDateString(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month-1 , day);
}

function filters(status) {
    const selectedDate = new Date(document.getElementById("month_resigned_datepicker").value);
    console.log(selectedDate)
    tableRows.forEach(function(row) {
        const joinDateStr = row.querySelector("#joining_date").textContent;
        const employeeStatusCell = row.querySelector("#employee_status");
        
        if (joinDateStr.toLowerCase() === "none") {
            row.style.display = "none";
            return;
        }

        const joinDate = parseCustomDateString(joinDateStr);
        
        if (isNaN(joinDate.getTime())) {
            // Handle the case where joinDateStr is not a valid date
            row.style.display = "none";
            return;
        }

        // Corrected logic to consider employee status
        if (joinDate < selectedDate) {
            row.style.display = employeeStatusCell.textContent.toLowerCase() === status ? "" : "none";
        } else {
            row.style.display = "none";
        }
    });
}

function populateSelectOptions(selectId, optionsArray){
    var selectElement=document.getElementById(selectId);
    optionsArray.forEach(function(option){
        var optionElement=document.createElement("option")
        optionElement.value=option;
        optionElement.textContent=option;
        selectElement.appendChild(optionElement)
    });
}
populateSelectOptions("project", config.home.projects);
populateSelectOptions("designation", config.home.designations);
populateSelectOptions("employment_status", config.home.employment_statuses);
populateSelectOptions("status", config.home.statuses);
populateSelectOptions("location", config.home.locations);


setTimeout(function(){
    var flashMessages =document.querySelectorAll(".add_flash_message")
    flashMessages.forEach(function(flashMessage) {
        flashMessage.style.display = 'none';
      });
    }, 2000);

document.getElementById("page").addEventListener('change',function(event){
    
    document.getElementById("pageForm").submit()
    
})    

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pagination-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (page refresh)
            var page = this.getAttribute('data-page'); // Get the page number from data-page attribute

            // Send AJAX request to fetch data for the clicked page
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/home?page=' + page, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Update page content with the response
                    var responseData = JSON.parse(xhr.responseText);
                    document.body.innerHTML = responseData;
                } else {
                    // Handle error
                    console.error('Request failed. Status: ' + xhr.status);
                }
            };
            xhr.send();
        });
    });
});


