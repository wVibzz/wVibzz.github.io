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

    // Show the selected tab content and set the button as active
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");

    // Hide all input fields in the input area
    const inputFields = document.getElementsByClassName("input-field");
    for (let field of inputFields) {
        field.style.display = "none";
    }

    // Show the appropriate input field based on the active tab
    const inputId = tabName + "Input";
    const activeInput = document.getElementById(inputId);
    if (activeInput) {
        activeInput.style.display = "block";
    }
}

// Mock upload function to handle the input fields
function uploadContent() {
    // Check which input field is currently visible
    const activeInput = document.querySelector("#input-area .input-field:not([style*='display: none'])");

    if (activeInput) {
        let content;

        // Handle file or text input based on the input field type
        if (activeInput.type === "file") {
            content = activeInput.files[0]?.name || "No file selected";
        } else {
            content = activeInput.value || "No input provided";
        }

        // Display uploaded content based on the active tab
        const tabContentId = activeInput.id.replace("Input", "Display");
        const displayArea = document.getElementById(tabContentId);
        displayArea.innerHTML += `<p>${content}</p>`;

        activeInput.value = ""; // Clear input after upload
    }
}
