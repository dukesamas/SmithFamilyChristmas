const questions = [
    {
        question: "What is your favorite book?",
        options: ["1984", "To Kill a Mockingbird", "The Great Gatsby", "Moby Dick"],
        correct: "1984"
    },
    {
        question: "What would you do with a million dollars?",
        options: ["Travel", "Invest", "Donate", "Save it"],
        correct: "Invest"
    },
    {
        question: "What motivates you every day?",
        options: ["Family", "Money", "Happiness", "Success"],
        correct: "Happiness"
    },
    {
        question: "If you could live anywhere, where would it be?",
        options: ["Paris", "Tokyo", "New York", "Sydney"],
        correct: "Tokyo"
    },
    {
        question: "What is one goal you have for this year?",
        options: ["Learn a new skill", "Get fit", "Save money", "Read more books"],
        correct: "Learn a new skill"
    }
];

function getWeekNumber() {
    const startDate = new Date("2024-12-16"); // Starting Monday, December 16th, 2024
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysInWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.floor(timeDifference / daysInWeek) + 1;
}

function displayQuestion() {
    const weekNumber = getWeekNumber();
    const questionElement = document.getElementById("question");
    const weekNumberElement = document.getElementById("week-number");
    const optionsElement = document.getElementById("options");

    // Set the week number and question
    weekNumberElement.textContent = "Week " + weekNumber;
    const question = questions[weekNumber - 1] || { question: "No more questions for this year!" };
    questionElement.textContent = question.question;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Add the options for the current question
    question.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        optionsElement.appendChild(label);
    });
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        alert("Your answer: " + selectedOption.value);
    } else {
        alert("Please select an option.");
    }
}

// Call the function when the page loads
window.onload = displayQuestion;
