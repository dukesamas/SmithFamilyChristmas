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

function showModal(message, isCorrect) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const modalBg = document.getElementById("modal-bg");

    modalMessage.textContent = message;
    modal.style.display = "block";
    modalBg.style.display = "block";

    if (isCorrect) {
        modal.style.backgroundColor = "#6BBE44"; // Green for correct
    } else {
        modal.style.backgroundColor = "#FF6347"; // Red for incorrect
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    const modalBg = document.getElementById("modal-bg");

    modal.style.display = "none";
    modalBg.style.display = "none";
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const weekNumber = getWeekNumber();
        const correctAnswer = questions[weekNumber - 1].correct;

        if (selectedOption.value === correctAnswer) {
            showModal("Correct! Your answer: " + selectedOption.value, true);
        } else {
            showModal("Incorrect. Your answer: " + selectedOption.value + ". The correct answer was: " + correctAnswer, false);
        }
    } else {
        alert("Please select an option.");
    }
}

// Call the function when the page loads
window.onload = displayQuestion;
