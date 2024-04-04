function fetchRoleAndRenderMenu() {
    // Make an asynchronous request to fetch the role from the server
    fetch('/get_role') // Replace '/get_role' with the actual endpoint to fetch the role
    .then(response => response.json())
    .then(data => {
        // Check if the user is an admin and display admin menu item accordingly
        if (data.role === 'admin') {
            document.getElementById("admin-menu-item-placeholder").innerHTML = `
                <a href="/edit_config" class="nav-link py-3 border-bottom rounded-0" title="Config file" data-bs-toggle="tooltip" data-bs-placement="right" onclick="openConfigFile()">
                    <i class="fa-solid fa-cog icons"></i>
                </a>`;
            document.getElementById("register_menu").innerHTML = `
                <a href="/register" class="nav-link py-3 border-bottom rounded-0" title="Register" data-bs-toggle="tooltip" data-bs-placement="right">
                <i class="fa-solid fa-user-plus icons"></i>
                </a>`;    
        }
    })
    .catch(error => console.error('Error fetching role:', error));
}

function openConfigFile() {
    fetch('/edit_config')
    .then(response => {
        if (response.ok) {
            console.log('Config file opened successfully');
        } else {
            throw new Error('Failed to open config file');
        }
    })
    .catch(error => {
        console.error('Error opening config file:', error);
    });
}
fetchRoleAndRenderMenu();
