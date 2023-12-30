function renderHeader() {
    document.getElementById('header').innerHTML = '<h1>Welcome to BigPipe Example</h1>';
}

function renderNavigation() {
    document.getElementById('nav').innerHTML = `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>`;
}

function renderContent() {
    document.getElementById('content').innerHTML = `
        <h2>Main Content</h2>
        <p>This is the main content of the page. It can include text, images, and other elements.</p>
        <button onclick="handleButtonClick()">Click Me</button>`;
}

function renderFooter() {
    document.getElementById('footer').innerHTML = '<p>© 2023 BigPipe Example</p>';
}

function handleButtonClick() {
    alert('Button clicked! This is a dynamic interaction.');
}

function loadPage() {
    // Simulating asynchronous rendering using setTimeout
    setTimeout(renderHeader, 100);
    setTimeout(renderNavigation, 300);
    setTimeout(renderContent, 500);
    setTimeout(renderFooter, 700);
}

// Load the page using BigPipe
loadPage();
