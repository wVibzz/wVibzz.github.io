// Tab Navigation Functionality
function openTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("active");
    }

    // Remove "active" class from all buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let button of tabButtons) {
        button.classList.remove("active");
    }

    // Show the selected tab and set the button as active
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Mock upload function
function uploadContent(inputId) {
    const inputElement = document.getElementById(inputId);
    let content;

    if (inputElement.type === "file") {
        content = inputElement.files[0]?.name || "No file selected";
    } else {
        content = inputElement.value || "No input provided";
    }

    alert(`Uploaded content: ${content}`);
    inputElement.value = "";  // Clear input after upload
}
