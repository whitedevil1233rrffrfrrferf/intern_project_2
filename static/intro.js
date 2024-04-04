const selectBtn = document.querySelector(".select-btn");
let items = document.querySelectorAll(".items");
let selectedPanel = [];

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
    loadSavedItems();
});

items.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        item.classList.toggle("checked");
        updateSelectedPanel();
        saveItemsToStorage();
    });
});

function updateSelectedPanel() {
    const checked = document.querySelectorAll(".checked");
    const btnText = document.querySelector(".btn-text");
    selectedPanel = Array.from(checked).map((item) => item.innerText);

    if (checked && checked.length > 0) {
        btnText.innerText = `${checked.length}`;
    } else {
        btnText.innerText = "Select panel";
    }

    const selectedPanelInput = document.getElementById("selectedPanel");
    selectedPanelInput.value = selectedPanel.join(", ");
}

const addPersonBtn = document.getElementById("addPersonBtn");
addPersonBtn.addEventListener("click", () => {
    const newPersonInput = document.getElementById("newPersonInput");
    const newPersonName = newPersonInput.value.trim();

    if (newPersonName) {
        const newListElement = document.createElement("li");
        newListElement.className = "items";
        newListElement.innerHTML = `
            <span class="checkbox">
                <i class="fa-solid fa-check check-icon"></i>
            </span>
            <span class="item-text">${newPersonName}</span>
        `;

        const panelList = document.getElementById("panelList");
        panelList.appendChild(newListElement);
        newPersonInput.value = "";

        updateSelectedPanel();
        saveItemsToStorage();
        window.location.reload();

        newListElement.addEventListener("click", (event) => {
            newListElement.classList.toggle("checked");
            updateSelectedPanel();
            saveItemsToStorage();
        });
    }
});

document.getElementById("newPersonInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

function saveItemsToStorage() {
    const panelList = document.getElementById("panelList");
    const items = panelList.querySelectorAll(".items");
    const savedItems = [];
    items.forEach((item) => {
        savedItems.push(item.querySelector(".item-text").innerText);
    });
    localStorage.setItem("panelItem", JSON.stringify(savedItems));
    
}

function loadSavedItems() {
    const savedItemsJson = localStorage.getItem("panelItem");
    if (savedItemsJson) {
        const savedItems = JSON.parse(savedItemsJson);
        const panelList = document.getElementById("panelList");
        panelList.innerHTML = "";
        savedItems.forEach((itemText) => {
            const newListElement = document.createElement("li");
            newListElement.className = "items";
            newListElement.innerHTML = `
            <div class="item-container">
                <span class="checkbox">
                    <i class="fa-solid fa-check check-icon"></i>
                </span>
                <span class="item-text">${itemText}</span>
                <button class="btn btn-danger delete-btn" onclick="deletePerson(this)"><i class="fa-solid fa-trash"></i></button>
            </div>`;
            panelList.appendChild(newListElement);
            newListElement.addEventListener("click", (event) => {
                newListElement.classList.toggle("checked");
                updateSelectedPanel();
                saveItemsToStorage();
            });
        });
    }
}

function deletePerson(button){
    const listItem=button.closest(".items");
    listItem.remove();
    updateSelectedPanel();
    saveItemsToStorage();
}

