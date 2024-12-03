const questions = [
    "What is your favorite book?",
    "What would you do with a million dollars?",
    "What motivates you every day?",
    "If you could live anywhere, where would it be?",
    "What is one goal you have for this year?",
];

function getWeekNumber() {
    const startDate = new Date("2024-01-01"); // Set the start date (first week of the year)
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysInWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.floor(timeDifference / daysInWeek) + 1; // Calculate current week number
}

function displayQuestion() {
    const weekNumber = getWeekNumber();
    const questionElement = document.getElementById("question");
    const weekNumberElement = document.getElementById("week-number");

    // Ensure that the week number doesn't exceed the array length
    const question = questions[weekNumber - 1] || "No more questions for this year!";
    questionElement.textContent = question;
    weekNumberElement.textContent = weekNumber;
}

function submitAnswer() {
    const answer = document.getElementById("answer-input").value;
    if (answer) {
        alert("Your answer has been submitted: " + answer);
        // You can store this in a database or log it for further use
    } else {
        alert("Please enter an answer.");
    }
}

// Display the question when the page loads
window.onload = displayQuestion;
