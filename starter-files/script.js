// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const fetchAnswer = async () => {
    try {
        const response = await fetch(API_ENDPOINT);
        const parsedResponse = await response.json();
        return parsedResponse.answer;
    } catch (err) {
        console.log(err);
    }
}

const answerContainer = document.getElementById("answer");
const btnTrigger = document.getElementById("button");


btnTrigger.addEventListener("click", async () => {
    const userInput = document.getElementById("input").value;
    if (userInput.trim() !== "") {
        const answer = await fetchAnswer();
        answerContainer.textContent = answer;
        setTimeout(() => {
            answerContainer.textContent = "";
          }, 5000);
    }else {
        alert("Please enter a question");
    }
})




