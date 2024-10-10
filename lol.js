/** 
 * Project :
 * --> Change background color by generating when it is clicked.
 * 
 */

// Project requirements:
// Step-1: Create onload handler.
window.onload = () => {
    console.log('loaded');
    main();
}

// Step-2: Random color generator function.
function generateRgmColor() {
    // rgb(0, 0, 0) to rgb(255, 255, 255)  
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 250);
    const blue = Math.floor(Math.random() * 250);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Step-3: Collect all necessary references.
function main() {
    document.getElementById('change-btn').addEventListener('click', () => {
        // Change the background color of the body
        const color = generateRgmColor(); // Use the correct function name
        document.body.style.backgroundColor = color;
    
        // Set the RGB color code in the input field
        document.getElementById('color-code').value = color;
    });
    
    // Add an event listener to the copy button
    document.getElementById('copy-btn').addEventListener('click', () => {
        const colorCode = document.getElementById('color-code');
        colorCode.select();
        document.execCommand('copy');
        alert('RGB code copied: ' + colorCode.value);
    });
}
