<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Theme Tabbed Content Platform</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Tab Navigation at the Top -->
    <nav class="tabs">
        <button class="tab-btn" onclick="openTab(event, 'videos')">Videos</button>
        <button class="tab-btn" onclick="openTab(event, 'images')">Images</button>
        <button class="tab-btn" onclick="openTab(event, 'links')">Links</button>
        <button class="tab-btn" onclick="openTab(event, 'files')">Files</button>
        <button class="tab-btn" onclick="openTab(event, 'messaging')">Messaging</button>
    </nav>

    <!-- Flex Container for Main Content and Input Area -->
    <div class="flex-container">
        <!-- Message Display Area -->
        <div id="main-content">
            <div id="videos" class="tab-content">
                <div id="videoDisplay">Uploaded videos will appear here.</div>
            </div>

            <div id="images" class="tab-content">
                <div id="imageDisplay">Uploaded images will appear here.</div>
            </div>

            <div id="links" class="tab-content">
                <div id="linkDisplay">Added links will appear here.</div>
            </div>

            <div id="files" class="tab-content">
                <div id="fileDisplay">Uploaded files will appear here.</div>
            </div>

            <div id="messaging" class="tab-content">
                <div id="messageDisplay">Messages will appear here.</div>
            </div>
        </div>

        <!-- Input Area for Uploading Content -->
        <div id="input-area">
            <div class="input-field-container">
                <input type="file" id="videoInput" class="input-field" accept="video/*">
                <input type="file" id="imageInput" class="input-field" accept="image/*">
                <input type="text" id="linkInput" class="input-field" placeholder="Paste your link here">
                <input type="file" id="fileInput" class="input-field">
                <input type="text" id="messageInput" class="input-field" placeholder="Type your message">
            </div>
            <button onclick="uploadContent()">Send</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
