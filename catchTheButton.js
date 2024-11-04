const button = document.getElementById('catchButton');
let hoverCount = 0;

// Event listener for mouseover event on the button
button.addEventListener('mouseover', () => {
    hoverCount++;
    // Move the button if hoverCount is not a multiple of 5
    if (hoverCount % 5 !== 0) {
        moveButton();
    }
});

// Event listener for mousedown event on the button
button.addEventListener('mousedown', () => {
    // Move the button if hoverCount is a multiple of 5
    if (hoverCount % 5 === 0) {
        moveButton();
    }
});

function moveButton() {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    let newX, newY;
    // Ensure the new position is not under the mouse cursor
    do {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
    } while (isMouseOverButton(newX, newY, buttonWidth, buttonHeight));

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

    // Change button text temporarily
    const originalText = button.textContent;
    button.textContent = 'Too slow, Try Again!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 500); // Change back after 500ms
}

// Check if the mouse is over the button's new position
function isMouseOverButton(x, y, width, height) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
}