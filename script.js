const questions = [
    "What is your favorite book?",
    "What would you do with a million dollars?",
    "What motivates you every day?",
    "If you could live anywhere, where would it be?",
    "What is one goal you have for this year?",
];

// Multiple-choice options for each question
const options = [
    ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Moby Dick"],
    ["Buy a house", "Invest it", "Donate it", "Travel the world"],
    ["Money", "Passion", "Fame", "Family"],
    ["Japan", "Australia", "Canada", "Iceland"],
    ["Learn a new skill", "Get fit", "Save money", "Read more books"]
];

// Correct answers for validation
const correctAnswers = [
    "To Kill a Mockingbird",  // Correct for question 1
    "Invest it",              // Correct for question 2
    "Passion",                // Correct for question 3
    "Japan",                  // Correct for question 4
    "Learn a new skill"       // Correct for question 5
];

function getWeekNumber() {
    const startDate = new Date("2024-12-16T00:00:00"); // First Monday: Dec 16th, 2024
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysInWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.floor(timeDifference / daysInWeek) + 1; // Calculate current week number
}

function displayQuestion() {
    const weekNumber = getWeekNumber();
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const weekNumberElement = document.getElementById("week-number");

    // Ensure the week number doesn't exceed the questions array
    const question = questions[weekNumber - 1] || "No more questions for this year!";
    const choices = options[weekNumber - 1] || [];

    // Display question and week number
    questionElement.textContent = question;
    weekNumberElement.textContent = `Week: ${weekNumber}`;

    // Display multiple-choice options as radio buttons
    optionsElement.innerHTML = ""; // Clear previous options
    choices.forEach((choice, index) => {
        const optionHTML = `
            <label>
                <input type="radio" name="answer" value="${choice}"> ${choice}
            </label><br>
        `;
        optionsElement.innerHTML += optionHTML;
    });
}

function submitAnswer() {
    const weekNumber = getWeekNumber();
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = correctAnswers[weekNumber - 1];

    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer is: "${correctAnswer}".`);
    }
}

// Display the question when the page loads
window.onload = displayQuestion;
