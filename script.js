// JavaScript for handling puzzle logic will go here
// Example: Function to check a puzzle answer
function checkPuzzleAnswer(inputId, correctAnswer, nextPuzzleUrl) {
    var userAnswer = document.getElementById(inputId).value;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        window.location.href = nextPuzzleUrl;
    } else {
        alert("Incorrect answer. Try again.");
    }
}

function checkFinalPassword() {
    var finalPassword = document.getElementById("finalPassword").value;
    var correctPassword = "i love you tabby."; // Replace with the actual password

    if (finalPassword.toLowerCase() === correctPassword.toLowerCase()) {
        window.location.href = 'final.html'; // Redirect to the final page
    } else {
        alert("Incorrect password. Try again.");
    }
}

// Assuming a shift of 1 for the Caesar cipher
function decryptCaesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    return str
        .toLowerCase()
        .split('')
        .map(char => {
            const isLetter = alphabet.includes(char);
            if (isLetter) {
                const position = (alphabet.indexOf(char) - shift + 26) % 26;
                return alphabet[position];
            }
            return char;
        })
        .join('');
}

function checkDecryptedMessage() {
    const userAnswer = document.getElementById("decryptedMessage").value.toLowerCase();
    const cipherText = document.getElementById("cipherText").textContent;
    const decrypted = decryptCaesarCipher(cipherText, 2); // Now using a shift of 2

    if (userAnswer === decrypted) {
        // Redirect to puzzle2.html when the answer is correct
        window.location.href = "puzzle2.html";
    } else {
        alert("Incorrect answer. Try again.");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase();
    const correctAnswer = "love"; // The correct answer is "Love" (case-insensitive)

    if (userAnswer === correctAnswer) {
        // Redirect to the next puzzle or take further action
        window.location.href = "puzzle3.html";
    } else {
        alert("Incorrect answer. Please try again.");
        // Optionally, you can clear the input field to let the user try again
        document.getElementById("answerInput").value = "";
    }
}

function checkPoemAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase();
    const correctAnswer = "tabby"; // The correct answer to reveal the hidden message

    if (userAnswer === correctAnswer) {
        // Reveal the hidden message
        window.location.href = "message.html";
    } else {
        alert("Incorrect answer. Please try again.");
        document.getElementById("answerInput").value = ""; // Clear the input field
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the background image element
    var backgroundImage = document.querySelector(".backgroundimg");

    // Add a class to keep the image visible after fading in
    backgroundImage.classList.add("visible");
});







