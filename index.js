// Your code here
// Function to move the dodger to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Function to move the dodger to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < window.innerWidth - dodger.clientWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Event listener for arrow key presses
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
